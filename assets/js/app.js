const { RODS, UPCOMING } = window.FischData;
const { loadProgress, saveProgress } = window.FischServices;
const { bindSearch, confirmModal, renderMainList, renderUpcomingList, updateGauge } = window.FischUi;

let state = {};

const mainList = document.getElementById('mainList');
const upcomingList = document.getElementById('upcomingList');
const searchBox = document.getElementById('searchBox');
const checkAllBtn = document.getElementById('checkAllBtn');
const resetBtn = document.getElementById('resetBtn');

function refreshMainList(){
  renderMainList(mainList, RODS, state, async (name, checked, row) => {
    state[name] = checked;
    row.classList.toggle('done', checked);
    await saveProgress(state);
    updateGauge(RODS, state);
  });
}

async function checkAll(){
  RODS.forEach(([name]) => {
    state[name] = true;
  });
  await saveProgress(state);
  refreshMainList();
  updateGauge(RODS, state);
}

async function resetAll(){
  if(!await confirmModal()) return;

  state = {};
  await saveProgress(state);
  refreshMainList();
  updateGauge(RODS, state);
}

async function init(){
  state = await loadProgress();
  refreshMainList();
  renderUpcomingList(upcomingList, UPCOMING);
  updateGauge(RODS, state);

  bindSearch(searchBox, mainList);
  checkAllBtn.addEventListener('click', checkAll);
  resetBtn.addEventListener('click', resetAll);
}

init();
