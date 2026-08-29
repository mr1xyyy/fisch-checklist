window.FischUtils = window.FischUtils || {};

const WIKI_PAGE_OVERRIDES = {
  "Anchor & Chain": "Anchor n' Chain",
  "Cryolash Rod": "Cryolash",
  "Crystallised Rod": "Crystalized Rod",
  "Duskwire Rod": "Duskwire",
  "Elder Mossripper Rod": "Elder Mossripper",
  "Nico's Yarncaster Rod": "Nico's Yarncaster",
  "NoLife Rod": "No-Life Rod",
  "Poseidon Lance": "Poseidon's Lance",
  "Requiem Rod": "Requiem",
  "Thalassar Ruin": "Thalassar's Ruin",
  "Zeus Thundermaul": "Zeus's Thundermaul",
};

window.FischUtils.wikiUrl = function wikiUrl(name){
  const pageTitle = WIKI_PAGE_OVERRIDES[name] || name;
  const page = encodeURIComponent(pageTitle.replace(/\s+/g, '_'));
  return `https://fischipedia.org/wiki/${page}`;
};
