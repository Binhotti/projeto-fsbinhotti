document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  const whatsappNumber = '5547991158062';
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3');
    if (title) {
      const nome = title.textContent.trim();
      let mensagem = `Olá, desejo receber mais informações sobre ${nome}.`;
      const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
      const btn = document.createElement('a');
      btn.href = link;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.className = 'btn-primary whatsapp-btn';
      btn.style.marginTop = '10px';
      btn.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width:20px; height:20px; vertical-align:middle; margin-right:6px;"> Envie uma mensagem pelo WhatsApp';
      const preco = card.querySelector('.card-price');
      if (preco) {
        preco.insertAdjacentElement('afterend', btn);
      }
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.querySelector('.menu-toggle');
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('active');
  }
});