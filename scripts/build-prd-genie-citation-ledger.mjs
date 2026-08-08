import fs from 'node:fs';
import path from 'node:path';

const capstone=process.argv[2];
if(!capstone)throw new Error('Usage: node scripts/build-prd-genie-citation-ledger.mjs <capstone-repo>');
const fixture=path.join(capstone,'evaluation/fixtures/multi-source/realistic-v1');
const read=name=>JSON.parse(fs.readFileSync(path.join(fixture,name),'utf8'));
const packet=read('source-packet-v4.json');
const extraction=read('expected-requirement-extraction.json');
const decisions=read('decision-to-prd-disposition-v4.json').records;
const production=read('realistic-v4-production-prd.json');
const delivery=read('realistic-v4-story-breakdown.json');

const key=value=>`${value.source_id}|${value.location}|${value.quote}`;
const evidenceItems=new Map();
for(const item of extraction.items)for(const evidence of item.evidence||[]){const k=key(evidence);if(!evidenceItems.has(k))evidenceItems.set(k,[]);evidenceItems.get(k).push(item.id)}
const evidenceDecisions=new Map();
for(const decision of decisions)for(const evidence of [decision.decision_citation,...(decision.original_evidence||[])].filter(Boolean)){const k=key(evidence);if(!evidenceDecisions.has(k))evidenceDecisions.set(k,[]);evidenceDecisions.get(k).push(decision)}

const prdLocations=new Map(production.provenance_ledger.approved_item_coverage.map(item=>[item.item_id,item.prd_location]));
const deliveryRefs=new Map();
const addRef=(ref,type,id)=>{if(!deliveryRefs.has(ref))deliveryRefs.set(ref,{epics:new Set(),features:new Set(),stories:new Set(),criteria:new Set()});deliveryRefs.get(ref)[type].add(id)};
for(const epic of delivery.epics)for(const ref of epic.source_refs||[])addRef(ref,'epics',epic.id);
for(const epic of delivery.epics)for(const feature of epic.features||[]){for(const ref of feature.source_refs||[])addRef(ref,'features',feature.id);for(const story of feature.stories||[]){for(const ref of story.source_refs||[])addRef(ref,'stories',story.id);for(const criterion of story.acceptance_criteria||[])for(const ref of criterion.source_refs||[])addRef(ref,'criteria',criterion.id)}}

const prefixes={
 'SRC-REALISTIC-PB-001':'PB','SRC-REALISTIC-MT-001':'MT','SRC-REALISTIC-SN-001':'SN',
 'SRC-REALISTIC-CLAR-001':'CLAR','SRC-REALISTIC-CLAR-AMEND-001':'AMEND','SRC-REALISTIC-CLAR-MOBILE-001':'MOBILE'
};
const rank={included_first_release:4,controlled_tbd:3,deferred_out_of_first_release:2,superseded:1};
const rows=[];
for(const source of packet.sources){
 source.citations.forEach((citation,index)=>{
  const k=key({...citation,source_id:source.source_id}),itemIds=[...new Set(evidenceItems.get(k)||[])],decisionRecords=[...new Map((evidenceDecisions.get(k)||[]).map(record=>[record.decision_id,record])).values()];
  const decisionIds=decisionRecords.map(record=>record.decision_id),downstreamIds=[...new Set(decisionRecords.flatMap(record=>record.downstream_item_ids||[]))];
  const refs=[...new Set([...itemIds,...decisionIds,...downstreamIds])],hierarchy={epics:new Set(),features:new Set(),stories:new Set(),criteria:new Set()};
  for(const ref of refs){const match=deliveryRefs.get(ref);if(match)for(const type of Object.keys(hierarchy))for(const id of match[type])hierarchy[type].add(id)}
  const locations=[...new Set([...itemIds,...downstreamIds].map(id=>prdLocations.get(id)).filter(Boolean))];
  const strongest=decisionRecords.sort((a,b)=>(rank[b.disposition]||0)-(rank[a.disposition]||0))[0];
  let outcome='Context only / not carried into delivery';
  if(hierarchy.stories.size)outcome='Active delivery';
  else if(strongest?.disposition==='deferred_out_of_first_release')outcome='Deferred / PRD out of scope';
  else if(strongest?.disposition==='superseded')outcome='Superseded / audit only';
  else if(strongest?.disposition==='controlled_tbd')outcome='Controlled TBD';
  else if(locations.length)outcome='PRD context / no delivery hierarchy';
  rows.push({citation_id:`CIT-${prefixes[source.source_id]}-${String(index+1).padStart(3,'0')}`,source_id:source.source_id,source_name:source.source_name,location:citation.location,description:citation.quote,requirement_ids:itemIds,decision_ids:decisionIds,prd_locations:locations,epic_ids:[...hierarchy.epics],feature_ids:[...hierarchy.features],story_ids:[...hierarchy.stories],acceptance_criterion_ids:[...hierarchy.criteria],outcome});
 });
}
if(rows.length!==88)throw new Error(`Expected 88 citation rows, received ${rows.length}`);
const counts=rows.reduce((acc,row)=>(acc[row.outcome]=(acc[row.outcome]||0)+1,acc),{});
const payload={summary:{total:rows.length,source_counts:Object.fromEntries(packet.sources.map(source=>[source.source_name,source.citations.length])),outcome_counts:counts},rows};
fs.writeFileSync(new URL('../prd-genie-citation-ledger-data.js',import.meta.url),`window.PRD_GENIE_CITATION_LEDGER=${JSON.stringify(payload)};\n`);
console.log(JSON.stringify(payload.summary,null,2));
