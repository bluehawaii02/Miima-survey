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

const fillQuoteBtn = document.querySelector(".get-started");

fillQuoteBtn.addEventListener("click", () => {
  window.location.href = "getQuote.html";
  document.style.backgroundColor = "red";
});