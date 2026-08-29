function createDepthMarker(label){
  const marker = document.createElement('div');
  marker.className = 'depth-marker';
  marker.innerHTML = `<div class="tick">${label}</div><div class="rule"></div>`;
  return marker;
}

window.FischUi = window.FischUi || {};

window.FischUi.renderMainList = function renderMainList(mount, rods, state, onToggle){
  mount.innerHTML = '';
  let currentLetter = '';
  const { imageUrl, wikiUrl } = window.FischUtils;

  rods.forEach(([name, info]) => {
    const letter = name[0].toUpperCase();

    if(letter !== currentLetter){
      currentLetter = letter;
      mount.appendChild(createDepthMarker(letter));
    }

    const row = document.createElement('div');
    row.className = `rod${state[name] ? ' done' : ''}`;
    row.dataset.name = name.toLowerCase();
    row.innerHTML = `
      <input type="checkbox" class="chk" ${state[name] ? 'checked' : ''}>
      <a class="rod-image-link" href="${wikiUrl(name)}" target="_blank" rel="noopener" aria-label="Open ${name} on Fischipedia">
        <img class="rod-image" src="${imageUrl(name)}" alt="${name}">
      </a>
      <div class="rbody">
        <div class="rname">${name}</div>
        <div class="rinfo">${info}</div>
        <a class="rlink" href="${wikiUrl(name)}" target="_blank" rel="noopener">Open on Fischipedia -></a>
      </div>`;

    row.querySelector('.chk').addEventListener('change', event => {
      onToggle(name, event.target.checked, row);
    });

    mount.appendChild(row);
  });
};
