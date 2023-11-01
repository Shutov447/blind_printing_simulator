'use strict';

let zIndexForSettings = -10;
let settingsBtn = document.getElementById('settings-btn');
let settingsLayouts = [
  document.getElementById('settings-background'),
  document.getElementById('settings-tab-container'),
  document.getElementById('settings-tab'),
];

(() => {
  settingsBtn.addEventListener('click', function () {
    for (let i = 0; i < settingsLayouts.length; i++) {
      settingsLayouts[i].style.display = 'flex';
      settingsLayouts[i].style.zIndex = -zIndexForSettings--;
    }
    zIndexForSettings = 10;
  });

  settingsLayouts[1].addEventListener('click', function (event) {
    if (event.target.closest('#settings-tab')) {
      return;
    }

    for (let i = 0; i < settingsLayouts.length; i++) {
      settingsLayouts[i].style.display = 'none';
      settingsLayouts[i].style.zIndex = -zIndexForSettings++;
    }
    zIndexForSettings = -10;
  });
})();
