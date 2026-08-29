window.FischUi = window.FischUi || {};

window.FischUi.bindSearch = function bindSearch(input, list){
  input.addEventListener('input', event => {
    const query = event.target.value.trim().toLowerCase();

    list.querySelectorAll('.rod').forEach(row => {
      row.classList.toggle('hidden', query && !row.dataset.name.includes(query));
    });

    list.querySelectorAll('.depth-marker').forEach(marker => {
      marker.style.display = query ? 'none' : 'flex';
    });
  });
};
