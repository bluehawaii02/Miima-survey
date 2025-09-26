const mobilePanel = document.querySelector('.head-mid-nd'); // the mobile panel
const mobileServicesBtn = document.getElementById('mobile-services-btn'); // the service button inside panel
const mobileServicesList = document.getElementById('mobile-services-list'); // the panel's list
const mobileCaret = document.getElementById('mobile-services-caret');
const menuBtnServ = document.querySelector('.bi-list');
const body = document.body;

// Safety guards
if (mobileServicesBtn && mobileServicesList) {
  mobileServicesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // avoid document-level click handlers interfering

    // toggle 'show' class — CSS already has .service-child.show { display:flex !important; }
    const isOpen = mobileServicesList.classList.toggle('show');

    // toggle caret icon if present
    if (mobileCaret) {
      mobileCaret.classList.toggle('bi-caret-down', !isOpen);
      mobileCaret.classList.toggle('bi-caret-up', isOpen);
    }
  });
}

// Close mobile services list when clicking outside (only when panel is open)
document.addEventListener('click', (e) => {
  if (!mobilePanel) return;
  const isPanelOpen = getComputedStyle(mobilePanel).display !== 'none';
  if (!isPanelOpen) return;

  // if click is outside panel and outside the menu-button, close lists
  if (!mobilePanel.contains(e.target) && !menuBtnServ.contains(e.target)) {
    if (mobileServicesList && mobileServicesList.classList.contains('show')) {
      mobileServicesList.classList.remove('show');
      if (mobileCaret) {
        mobileCaret.classList.remove('bi-caret-up');
        mobileCaret.classList.add('bi-caret-down');
      }
    }
    // optionally hide the whole panel too:
    // mobilePanel.style.display = 'none'; body.style.overflow = 'auto';
  }
});

// Mobile panel toggle (menu icon)
if (menuBtnServ && mobilePanel) {
  menuBtnServ.addEventListener('click', (e) => {
    e.stopPropagation();
    const panelIsVisible = getComputedStyle(mobilePanel).display !== 'none';
    if (!panelIsVisible) {
      // show panel (let CSS control visuals)
      mobilePanel.style.display = 'flex';
      body.style.overflow = 'hidden';
    } else {
      mobilePanel.style.display = 'none';
      body.style.overflow = 'auto';
      // also close services list inside panel when panel closes
      if (mobileServicesList && mobileServicesList.classList.contains('show')) {
        mobileServicesList.classList.remove('show');
        if (mobileCaret) {
          mobileCaret.classList.remove('bi-caret-up');
          mobileCaret.classList.add('bi-caret-down');
        }
      }
    }
  });
}
