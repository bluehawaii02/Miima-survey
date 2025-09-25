const menuBtn = document.querySelector(".mobile-menu-toggle");
const mobilePanel = document.querySelector(".head-mid-nd");
const body = document.body;

if (menuBtn && mobilePanel) {
  function setPanelOpen(open) {
    if (open) {
      mobilePanel.classList.add('open');
      mobilePanel.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobilePanel.classList.remove('open');
      mobilePanel.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      menuBtn.setAttribute('aria-expanded', 'false');
      const svcBtn = mobilePanel.querySelector('.services-link');
      const svcList = mobilePanel.querySelector('.services-dropdown');
      if (svcBtn && svcList && svcList.classList.contains('show')) {
        svcList.classList.remove('show');
        svcList.setAttribute('aria-hidden', 'true');
        svcBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  menuBtn.addEventListener('click', () => setPanelOpen(!mobilePanel.classList.contains('open')));
  menuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPanelOpen(!mobilePanel.classList.contains('open'));
    }
  });

  document.addEventListener('click', (e) => {
    if (!mobilePanel.classList.contains('open')) return;
    if (!mobilePanel.contains(e.target) && !menuBtn.contains(e.target)) {
      setPanelOpen(false);
    }
  });
}

const svcToggle = document.querySelector('.head-mid-nd .services-link');
const svcList = document.querySelector('.head-mid-nd .services-dropdown');

if (svcToggle && svcList) {
  svcToggle.addEventListener('click', (e) => {
    const isOpen = svcList.classList.toggle('show');
    svcList.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    svcToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  svcToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      svcToggle.click();
    }
  });
}

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

const QuoteArchi = document.querySelector(".architect-quote");
const ContArchitect = document.querySelector(".archi-quote");

if(QuoteArchi){
    QuoteArchi.addEventListener("click", () => {
        window.location.href = "getQuote.html";
    })
};

if(ContArchitect){
    ContArchitect.addEventListener("click", () => {
        window.location.href = "contact.html";
    })
};
