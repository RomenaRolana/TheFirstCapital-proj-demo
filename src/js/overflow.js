(() => {
  const refs = {
    openTextBtn: document.querySelectorAll('[data-product-open]'),
  };

  refs.openTextBtn.forEach(e => {
    e.addEventListener('click', () => {
      const hiddenText = e.parentNode.querySelector('[data-products-hidden]');
      hiddenText.classList.toggle('is-hidden');
      e.classList.toggle('transform');
    });
  });
})();

