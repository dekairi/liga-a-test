'use strict';

(function () {
  let elModalStepOne = document.querySelector('.modal');
  let elOverlay = document.querySelector('#overlay');
  let elCallButton = document.querySelector('.header__link--order');
  let elCloseButton = document.querySelector('.modal__close-button');

  let hideModal = function () {
    elModalStepOne.classList.remove('modal--show');
    elOverlay.classList.remove('overlay--show');
    elCloseButton.removeEventListener('click', hideModal);
  };

  let hideModalByKeyHandler = function (evt) {
    if (evt.key === window.constants.Key.ESCAPE) {
      hideModal();
      document.removeEventListener('keydown', hideModalByKeyHandler);
    }
  };

  let showModal = function (modalWindow) {
    modalWindow.classList.add('modal--show');
    elOverlay.classList.add('overlay--show');
    document.addEventListener('keydown', hideModalByKeyHandler);
    elCloseButton.addEventListener('click', hideModal);
    window.checkbox.setCheckboxes();
  };

  let openModalByClickHandler = function (evt) {
    evt.preventDefault();
    showModal(elModalStepOne);
  };

  let openModalByKeyHandler = function (evt) {
    if (evt.key === window.constants.Key.ENTER) {
      showModal(elModalStepOne);
    }
  };

  hideModal();

  elCallButton.addEventListener('click', openModalByClickHandler);
  elCallButton.addEventListener('keydown', openModalByKeyHandler);
})();
