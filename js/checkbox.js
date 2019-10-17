'use strict';

(function () {
  let addListenersForCheckboxes = function (checkboxes) {
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('keydown', function (evt) {
          if (evt.key === window.constants.Key.SPACEBAR) {
            evt.preventDefault();
            changeCheckbox(checkbox, checkbox.querySelector('input'), checkbox.querySelector('.form__checkbox-indicator'));
          }
        });
      checkbox.addEventListener('click', function () {
          changeCheckbox(checkbox, checkbox.querySelector('input'), checkbox.querySelector('.form__checkbox-indicator'));
        });
    });
  };

  let changeCheckbox = function (checkbox, input, indicator) {
    switch (checkbox.getAttribute('aria-checked')) {
      case 'true':
        checkbox.setAttribute('aria-checked', 'false');
        input.removeAttribute('checked');
        indicator.classList.remove('form__checkbox-indicator--selected');
        break;
      case 'false':
        checkbox.setAttribute('aria-checked', 'true');
        input.setAttribute('checked', 'checked');
        indicator.classList.add('form__checkbox-indicator--selected');
        break;
    }
  };

  window.checkbox = {
    setCheckboxes: function () {
      let elsCheckboxes = document.querySelectorAll('.form__checkbox');
      addListenersForCheckboxes(elsCheckboxes);
    }
  };
})();
