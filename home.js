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

/* document.addEventListener("click", (e) => {
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
}); */
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
 let slideIndex = 1;
        const slides = document.querySelectorAll('.testimonials-slide');
        const dots = document.querySelectorAll('.dot');
        
        function showSlide(n) {
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev');
                if (index + 1 === slideIndex) {
                    slide.classList.add('active');
                } else if (index + 1 < slideIndex) {
                    slide.classList.add('prev');
                }
            });
            
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index + 1 === slideIndex) {
                    dot.classList.add('active');
                }
            });
        }
        
        function currentSlide(n) {
            showSlide(slideIndex = n);
        }
        
        function nextSlide() {
            showSlide(slideIndex += 1);
        }
        
        // Auto-advance slides every 7 seconds (nice slow pace for reading two cards)
        setInterval(nextSlide, 7000);

        // Smooth scrolling for navigation
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }