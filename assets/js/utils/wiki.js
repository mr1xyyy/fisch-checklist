window.FischUtils = window.FischUtils || {};

window.FischUtils.wikiUrl = function wikiUrl(name){
  const query = encodeURIComponent(name);
  return `https://fisch.fandom.com/wiki/Special:Search?query=${query}`;
};
