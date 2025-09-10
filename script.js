const dropdown = document.querySelector(".bx-menu");
const dropdownContent = document.querySelector(".head-mid-nd");
const dropdownLost = document.querySelector(".head-mid-st");
const getQuote = document.querySelector(".button-quote");
const getQuote2 = document.querySelector(".get-started");

if(dropdown && dropdownContent &&dropdownLost){
  dropdown.addEventListener("click", () => {
    dropdownContent.style.display = "flex";
    dropdownContent.style.flexDirection = "column";
    dropdownLost.style.display = "none";
  });
}

if(getQuote && getQuote2){
  getQuote.addEventListener("click", () => {
    window.location = "quote.html";
  });

  getQuote2.addEventListener("click", () => {
    window.location = "quote.html";
  });
}