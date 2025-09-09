const dropdown = document.querySelector(".bx-menu");
const dropdownContent = document.querySelector(".head-mid-dropdown");

dropdown.addEventListener("click", () => {
  dropdownContent.style.display = "block";
  dropdown.style.color = "red";
});

/*dropdown.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
})*/