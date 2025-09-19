document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button1")) {
        window.location.href = "getQuote.html";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-head")) {
        window.location.href = "getQuote.html";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {
        window.location.href = "getQuote.html";
    }
});

const dropBtn = document.querySelector(".bx-menu");
const dropContent = document.querySelector(".head-mid-nd");

dropBtn.addEventListener("click", () => {
    if(dropContent.style.display == "none"){
        dropContent.style.display = "flex";
    }else{
        dropContent.style.display = "none";
    }
})