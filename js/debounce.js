'use strict';

(function () {
  const INTERVAL = 100;

  window.debounce = function (cb, interval) {
    let lastTimeout = null;

    return function () {
      let parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, INTERVAL);
    };
  };
})();
