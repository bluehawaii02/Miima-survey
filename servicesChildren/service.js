/*const DropBtn = document.querySelector(".third-a");
const DropContentTorongei =  document.querySelector(".service-child");
const DropIcon = document.querySelector(".bi-caret-down");

DropBtn.addEventListener("click", () => {
    if (getComputedStyle(DropContentTorongei).display === "none"){
        DropContentTorongei.style.display = "flex";}
    else{
        DropContentTorongei.style.display = "none"
    }
})


//let's add interactivity to the menu icon

const menuBtnServ = document.querySelector(".bi-list");
const navBarSide =  document.querySelector(".head-mid-nd");
const body = document.body;


if(menuBtnServ && navBarSide){
    menuBtnServ.addEventListener("click", () => {
        if(getComputedStyle(navBarSide).display === "none"){
            navBarSide.style.display = "flex";
            body.style.overflow = "hidden";
        }else{
            navBarSide.style.display = "none";
            body.style.overflow = "scroll";
        }
    })
}


const QuoteBtns = document.querySelector(".G-quote-q");

if(QuoteBtns){
    QuoteBtns.addEventListener("click", () => {
            window.location.href = "getQuote.html";
        })
    };*/


/*const DropBtn = document.querySelector(".third-a");
const DropContentTorongei = document.querySelector(".service-child");
const DropIcon = document.querySelector(".bi-caret-down");

if (DropBtn && DropContentTorongei) {
    DropBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle the dropdown using class instead of inline styles
        DropContentTorongei.classList.toggle("show");
        
        // Toggle the icon
        if (DropContentTorongei.classList.contains("show")) {
            DropIcon.classList.remove("bi-caret-down");
            DropIcon.classList.add("bi-caret-up");
        } else {
            DropIcon.classList.remove("bi-caret-up");
            DropIcon.classList.add("bi-caret-down");
        }
    });
}

// Let's add interactivity to the menu icon
const menuBtnServ = document.querySelector(".bi-list");
const navBarSide = document.querySelector(".head-mid-nd");
const body = document.body;

if (menuBtnServ && navBarSide) {
    menuBtnServ.addEventListener("click", () => {
        if (getComputedStyle(navBarSide).display === "none") {
            navBarSide.style.display = "flex";
            body.style.overflow = "hidden";
        } else {
            navBarSide.style.display = "none";
            body.style.overflow = "auto";
        }
    });
}

const QuoteBtns = document.querySelectorAll(".G-quote-q");
if (QuoteBtns.length > 0) {
    QuoteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Check if we're in a subdirectory (services folder)
            if (window.location.pathname.includes('/services/')) {
                window.location.href = "../getQuote.html";
            } else {
                window.location.href = "getQuote.html";
            }
        });
    });
}

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (DropBtn && DropContentTorongei && !DropBtn.contains(e.target) && !DropContentTorongei.contains(e.target)) {
        DropContentTorongei.classList.remove("show");
        if (DropIcon) {
            DropIcon.classList.remove("bi-caret-up");
            DropIcon.classList.add("bi-caret-down");
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    if (navBarSide && menuBtnServ && !navBarSide.contains(e.target) && !menuBtnServ.contains(e.target)) {
        if (getComputedStyle(navBarSide).display === "flex") {
            navBarSide.style.display = "none";
            body.style.overflow = "auto";
        }
    }
});*/


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

// quote button interactivity

const GoToQouteBtn = document.querySelectorAll(".G-quote-q");

GoToQouteBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "../getQuote.html"
    })
})


