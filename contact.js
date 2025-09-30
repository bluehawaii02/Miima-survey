
(function(){
  const root = document.querySelector('.contact-form');
  if (!root) return;

  const nameEl = root.querySelector('#name');
  const emailEl = root.querySelector('#email1');
  const msgEl = root.querySelector('#message');
  const hpEl = root.querySelector('#hp');
  const btn = root.querySelector('#contactSubmitBtn');
  const statusEl = root.querySelector('#contactStatus');
  const API = "https://miima-survey.vercel.app";

  function setStatus(text, type='info') {
    statusEl.textContent = text;
    statusEl.className = type === 'error' ? 'status error'
                        : type === 'success' ? 'status success'
                        : 'status';
  }

  function validate() {
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = msgEl.value.trim();

    if (!name || name.length < 2) return 'Please enter your name (min 2 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
    if (!message || message.length < 10) return 'Please enter a message (min 10 characters).';
    if (hpEl.value) return 'Spam detected.'; 
    return null;
  }

  async function submitContact() {
    const err = validate();
    if (err) { setStatus(err, 'error'); return; }

    const payload = {
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      //subject: 'Website Contact',               
      message: msgEl.value.trim(),
      hp: hpEl.value || ''
    };

    btn.disabled = true;
    const prevText = btn.textContent;
    btn.textContent = 'Sending...';
    setStatus('Sending...', 'info');

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload)
      });

      const out = await res.json().catch(()=>({ ok:false, message:'Invalid server response' }));
      if (!res.ok || !out.ok) {
        setStatus(out.message || 'Could not send your message. Please try again.', 'error');
      } else {
        setStatus(out.message || 'Thanks! We received your message.', 'success');
        
        if (out.ref) setStatus(`${out.message} Ref: ${out.ref}`, 'success');
        // clear the form
        nameEl.value = '';
        emailEl.value = '';
        msgEl.value = '';
      }
    } catch (e) {
      setStatus('Network error. Please check your connection and try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = prevText;
    }
  }

  btn.addEventListener('click', submitContact);

  msgEl.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      submitContact();
    }
  });
})();


const menu = document.querySelector(".bx-menu");
const dropdown = document.querySelector(".head-mid-nd");
const body = document.body;


menu.addEventListener("click", () => {
  if(dropdown.style.display === "none"){
    dropdown.style.display = "flex";
    body.style.overflow = "hidden";
  }else{
    dropdown.style.display ="none";
    body.style.overflow = "scroll";
  }
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("G-quote-c")) {
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
        
       
        setInterval(nextSlide, 7000);

        
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }


const ServBtn = document.querySelector(".third-a");
const ShownTorongei = document.querySelector(".dropdown-grandchild");
const DownIcon = document.querySelector(".bx-chevron-down");

if(ServBtn && ShownTorongei && DownIcon){
  ServBtn.addEventListener("click", () => {
    if(ShownTorongei.style.display == "none"){
      ShownTorongei.style.display = "flex";
      DownIcon.classList.add("bx-chevron-up");
    }else{
      ShownTorongei.style.display ="none";
      DownIcon.classList = "bx-chevron-down"
    }
  });
}
