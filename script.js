document.getElementById('year')?.textContent = new Date().getFullYear();

// Simple Formspree AJAX handler (unobtrusive — replace action with your endpoint)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const msg = document.getElementById('formMessage');
    try{
      const res = await fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });
      if(res.ok){
        msg.style.display = 'block';
        msg.className = 'alert alert-success';
        msg.textContent = 'Thanks — your message was sent.';
        form.reset();
      } else {
        throw new Error('Network error');
      }
    } catch(err){
      msg.style.display = 'block';
      msg.className = 'alert alert-danger';
      msg.textContent = 'There was an error sending your message. Please email us directly.';
    }
  });
}