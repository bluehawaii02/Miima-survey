const API = "https://121559faa5fe.ngrok-free.app";

const reviewStars = Array.from(document.querySelectorAll('.star-reviews .review'));
let currentRating = 0;

reviewStars.forEach((star, index) => {
  star.addEventListener('click', () => {
    currentRating = index + 1; // 1..5
    reviewStars.forEach((s, i) => {
      if (i < currentRating) {
        s.classList.add('bxs-star');
        s.classList.remove('bx-star');
      } else {
        s.classList.add('bx-star');
        s.classList.remove('bxs-star');
      }
    });
  });
});

// inputs
const msgEl = document.getElementById('review-arear');
const nameEl = document.getElementById('name-review');
const hpEl   = document.getElementById('reviewHp'); // hidden honeypot
const btn    = document.getElementById('aboutRevBtn');
const statusEl = document.getElementById('reviewStatus');

function setStatus(text, type='info') {
  statusEl.textContent = text;
  statusEl.className = type === 'error' ? 'status error'
                    : type === 'success' ? 'status success'
                    : 'status';
}

function validate() {
  if (!currentRating) return 'Please select a star rating.';
  if (!nameEl.value.trim()) return 'Please enter your name.';
  if (msgEl.value.trim().length < 10) return 'Message must be at least 10 characters.';
  if (hpEl && hpEl.value) return 'Spam detected.';
  return null;
}

async function submitReview() {
  const err = validate();
  if (err) { setStatus(err, 'error'); return; }

  const payload = {
    name: nameEl.value.trim(),
    rating: currentRating,
    message: msgEl.value.trim(),
    hp: hpEl?.value || ''
  };

  btn.disabled = true;
  const prev = btn.textContent;
  btn.textContent = 'Sending...';
  setStatus('Sending...', 'info');

  try {
    const res = await fetch(`${API}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
    const out = await res.json().catch(()=>({ ok:false, message:'Invalid server response' }));

    if (!res.ok || !out.ok) {
      setStatus(out.message || 'Could not submit your review. Please try again.', 'error');
    } else {
      setStatus(out.message || 'Thank you! Your review was received.', 'success');
      // reset form
      currentRating = 0;
      reviewStars.forEach(s => { s.classList.add('bx-star'); s.classList.remove('bxs-star'); });
      msgEl.value = '';
      nameEl.value = '';
    }
  } catch (e) {
    setStatus('Network error. Please check your connection.', 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = prev;
  }
}

btn.addEventListener('click', submitReview);

//let's take the user to the quote page using buttons

/*const GquoteBtn = document.querySelectorAll(".G-quote-a");

if(GquoteBtn){
  GquoteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "getQuote.html";
    })
  })
}*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("G-quote-a")) {
    window.location.href = "getQuote.html";
  }
});

const YsidBtn = document.querySelectorAll(".nicBtn");

YsidBtn.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "getQuote.html";
  });
});

const ContactNic = document.querySelector(".callC");

if(ContactNic){
  ContactNic.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}else{
  console.log("what varriable are you calling")
};

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