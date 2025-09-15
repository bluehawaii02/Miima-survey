
(function(){
  const root = document.querySelector('.contact-form');
  if (!root) return;

  const nameEl = root.querySelector('#name');
  const emailEl = root.querySelector('#email1');
  const msgEl = root.querySelector('#message');
  const hpEl = root.querySelector('#hp');
  const btn = root.querySelector('#contactSubmitBtn');
  const statusEl = root.querySelector('#contactStatus');
  //const API = "https://121559faa5fe.ngrok-free.app";

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
    if (hpEl.value) return 'Spam detected.'; // honeypot should be empty
    return null;
  }

  async function submitContact() {
    const err = validate();
    if (err) { setStatus(err, 'error'); return; }

    const payload = {
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      // phone is optional; add if you later add a phone field
      subject: 'Website Contact',                // backend expects a subject; set a sensible default
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
        // optional: show reference code if backend returns it
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

  // accessibility: submit on Ctrl/Cmd+Enter inside textarea
  msgEl.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      submitContact();
    }
  });
})();