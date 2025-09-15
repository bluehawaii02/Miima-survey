const button = document.querySelector(".bx-menu");
const content = document.querySelector(".head-mid-nd");

button.addEventListener("click", () => {
    if(content.style.display ==="none"){
        content.style.display = "flex";
        content.style.flexDirection = "column";
    }else{
        content.style.display = "none";
    };
});

if(content.style.display ==="flex"){
    window.addEventListener("click", () => {
        content.style.display = "none";
    })
}else{
    console.log("you're stupid")
};