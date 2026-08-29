window.FischUtils = window.FischUtils || {};

window.FischUtils.wikiUrl = function wikiUrl(name){
  const page = encodeURIComponent(name.replace(/\s+/g, '_'));
  return `https://fischipedia.org/wiki/${page}`;
};
