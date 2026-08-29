const STORAGE_KEY = 'fisch_masterline_progress';

window.FischServices = window.FischServices || {};

window.FischServices.loadProgress = async function loadProgress(){
  try{
    if(window.storage){
      const result = await window.storage.get(STORAGE_KEY, false);
      return result && result.value ? JSON.parse(result.value) : {};
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  }catch(error){
    console.warn("Could not load progress", error);
    return {};
  }
};

window.FischServices.saveProgress = async function saveProgress(state){
  try{
    const value = JSON.stringify(state);

    if(window.storage){
      await window.storage.set(STORAGE_KEY, value, false);
      return;
    }

    localStorage.setItem(STORAGE_KEY, value);
  }catch(error){
    console.error("Could not save progress", error);
  }
};
