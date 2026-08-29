window.FischUi = window.FischUi || {};

window.FischUi.updateGauge = function updateGauge(rods, state){
  const total = rods.length;
  const done = Object.values(state).filter(Boolean).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('gaugeFill').style.width = `${pct}%`;
  document.getElementById('gaugeLabel').textContent = `${done} / ${total}`;
  document.getElementById('pctStat').innerHTML = `${pct}%<small>complete</small>`;
};
