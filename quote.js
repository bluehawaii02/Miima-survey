const dropBtn = document.querySelector(".bx-menu");
const dropContent = document.querySelector(".head-mid-nd");

if(dropBtn && dropContent){
    dropBtn.addEventListener("click", () => {
        if(dropContent.style.display == "none"){
            dropContent.style.display = "flex";
        }else{
            dropContent.style.display = "none";
        };
    })
};