window.FischUi = window.FischUi || {};

window.FischUi.confirmModal = function confirmModal(){
  const modal = document.getElementById('confirmModal');
  const confirmBtn = modal.querySelector('[data-modal-confirm]');
  const cancelBtn = modal.querySelector('[data-modal-cancel]');
  let previousFocus = document.activeElement;

  function open(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    confirmBtn.focus();
  }

  function close(result){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    if(previousFocus && typeof previousFocus.focus === 'function'){
      previousFocus.focus();
    }

    return result;
  }

  return new Promise(resolve => {
    function finish(result){
      confirmBtn.removeEventListener('click', onConfirm);
      cancelBtn.removeEventListener('click', onCancel);
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKeydown);
      resolve(close(result));
    }

    function onConfirm(){
      finish(true);
    }

    function onCancel(){
      finish(false);
    }

    function onBackdrop(event){
      if(event.target === modal){
        finish(false);
      }
    }

    function onKeydown(event){
      if(event.key === 'Escape'){
        finish(false);
      }
    }

    confirmBtn.addEventListener('click', onConfirm);
    cancelBtn.addEventListener('click', onCancel);
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKeydown);
    open();
  });
};
