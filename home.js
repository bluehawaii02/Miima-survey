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

//let's take the user to the quote page using our buttons

/*const buttonsFquote = document.querySelectorAll(".G-Q-btn");

if(buttonsFquote){
    buttonsFquote.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("clicked")
            window.location.href = "getQuote.html";
    });
    })
}*/

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("G-Q-btn")) {
        window.location.href = "getQuote.html";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("G-quote-h")) {
        window.location.href = "getQuote.html";
    }
});

const YsidBtn =  document.querySelectorAll(".young-sid");

YsidBtn.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = "getQuote.html";
    });
});