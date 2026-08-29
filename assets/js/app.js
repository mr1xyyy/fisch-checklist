const { RODS, UPCOMING } = window.FischData;
const { loadProgress, saveProgress } = window.FischServices;
const { bindSearch, confirmModal, renderMainList, updateGauge } = window.FischUi;

let state = {};

const mainList = document.getElementById('mainList');
const searchBox = document.getElementById('searchBox');
const checkAllBtn = document.getElementById('checkAllBtn');
const resetBtn = document.getElementById('resetBtn');
const allRods = [...RODS, ...UPCOMING].sort(([firstName], [secondName]) => {
  return firstName.localeCompare(secondName);
});

async function updateRodState(name, checked, row){
  state[name] = checked;
  row.classList.toggle('done', checked);
  await saveProgress(state);
  updateGauge(allRods, state);
}

function refreshMainList(){
  renderMainList(mainList, allRods, state, updateRodState);
}

async function checkAll(){
  allRods.forEach(([name]) => {
    state[name] = true;
  });
  await saveProgress(state);
  refreshMainList();
  updateGauge(allRods, state);
}

async function resetAll(){
  if(!await confirmModal()) return;

  state = {};
  await saveProgress(state);
  refreshMainList();
  updateGauge(allRods, state);
}

async function init(){
  state = await loadProgress();
  refreshMainList();
  updateGauge(allRods, state);

  bindSearch(searchBox, mainList);
  checkAllBtn.addEventListener('click', checkAll);
  resetBtn.addEventListener('click', resetAll);
}

init();
