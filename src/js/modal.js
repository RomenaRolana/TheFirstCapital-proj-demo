(() => {
  // Modal for contacts
  const refs = {
    openAgreementBtn: document.querySelector('[data-agreement-open]'),
    closeAgreementBtn: document.querySelector('[data-agreement-close]'),
    agreement: document.querySelector('[data-agreement]'),
    openLocationBtn: document.querySelector('[data-location-open]'),
    closeLocationBtn: document.querySelector('[data-location-close]'),
    location: document.querySelector('[data-location]'),
  };

  refs.openLocationBtn.addEventListener('click', e => {
    toggleContacts(refs.location);
  });
  refs.closeLocationBtn.addEventListener('click', e => {
    toggleContacts(refs.location);
  });
  refs.openAgreementBtn.addEventListener('click', e => {
    toggleContacts(refs.agreement);
  });
  refs.closeAgreementBtn.addEventListener('click', e => {
    toggleContacts(refs.agreement);
  });

  function toggleContacts(modal) {
    modal.classList.toggle('is-hidden');
  }
})();


  // Modal for about
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
