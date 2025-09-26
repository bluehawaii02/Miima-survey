const DropBtn = document.querySelector(".third-a");
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
    };


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
