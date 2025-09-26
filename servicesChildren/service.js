const DropBtn = document.querySelector(".third-a");
const DropContentTorongei =  document.querySelector(".service-child");
const DropIcon = document.querySelector(".bi-caret-down");


if(DropBtn && DropContentTorongei && DropIcon){
    DropBtn.addEventListener("click", () => {
        if(getComputedStyle(DropContentTorongei).display === "none"){
            DropContentTorongei.style.display = "flex"
            DropIcon.classList.add("bi-caret-up");
            window.alert("clicked")
        }else{
            DropContentTorongei.style.display = "none";
            DropIcon.classlist = "bi-caret-down";
        };
    })
}


//let's add interactivity to the menu icon

const menuBtnServ = document.querySelector(".bi-list");
const navBarSide =  document.querySelector(".head-mid-nd");


if(menuBtnServ && navBarSide){
    menuBtnServ.addEventListener("click", () => {
        if(getComputedStyle(navBarSide).display === "none"){
            navBarSide.style.display = "flex";
        }else{
            navBarSide.style.display = "none";
        }
    })
}