  // Modal for section ABOUT
 /*
  this is better than 'modal.js'
 */
  (() => {

    const refs = {
      openmodalBtn: document.querySelector('[data-modal-open]'),
      closemodalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
  
    };
  
  
    refs.openmodalBtn.addEventListener('click', e => {
      toggleContacts(refs.modal);
    });
    refs.closemodalBtn.addEventListener('click', e => {
      toggleContacts(refs.modal);
    });
  
    function toggleContacts(modal) {
      modal.classList.toggle('is-hidden');
    }
  })();
