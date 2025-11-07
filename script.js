
    document.getElementById('year').textContent = new Date().getFullYear();

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