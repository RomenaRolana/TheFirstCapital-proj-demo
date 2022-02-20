(() => {
  // Modal for agreement
  const refs = {
    openAgreementBtn: document.querySelector('[data-agreement-open]'),
    closeAgreementBtn: document.querySelector('[data-agreement-close]'),
    agreement: document.querySelector('[data-agreement]'),
  };

  refs.openAgreementBtn.addEventListener('click', toggleModal);
  refs.closeAgreementBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.agreement.classList.toggle('is-hidden');
  }
})();
