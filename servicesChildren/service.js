const DropBtn = document.querySelector(".third-a");
const DropContentTorongei =  document.querySelector(".service-child");
const DropIcon = document.querySelector(".bi-caret-down");

DropBtn.addEventListener("click", () => {
    DropContentTorongei.style.display = "flex";
    window.alert("clicked")
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
            window.alert("clicked")
        })
    };
