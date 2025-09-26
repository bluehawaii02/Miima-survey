const DropBtn = document.querySelector(".third-a");
const DropContentTorongei =  document.querySelector(".service-child");
const DropIcon = document.querySelector(".bi-caret-down");


if(DropBtn && DropContentTorongei && DropIcon){
    DropBtn.addEventListener("click", () => {
        if(DropContentTorongei.style.display == "none"){
            DropContentTorongei.style.display = "flex";
            DropIcon.classList.add("bi-caret-up");
        }else{
            DropContentTorongei.style.display = "none";
            DropIcon.classList.add("bi-caret-down");
        };
    })
}


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