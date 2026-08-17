(() => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const tourPathMatch = window.location.pathname.match(/\/tours\/([^/]+)\/?$/);
  const norwegianTourLink = document.querySelector('.language-switch a[href="../../nb/"]');
  if (tourPathMatch && norwegianTourLink) {
    norwegianTourLink.setAttribute('href', `../../nb/tours/${tourPathMatch[1]}/`);
  }

  const slides = [...document.querySelectorAll('[data-slide]')];
  const dots = [...document.querySelectorAll('[data-slide-dot]')];
  let currentSlide = 0;
  let slideTimer;

  function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === currentSlide));
    dots.forEach((dot, i) => {
      const active = i === currentSlide;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  }

  function restartSlider() {
    window.clearInterval(slideTimer);
    if (slides.length > 1) {
      slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 5200);
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      restartSlider();
    });
  });

  showSlide(0);
  restartSlider();

  const modal = document.querySelector('[data-tour-modal]');
  const modalTitle = modal?.querySelector('[data-modal-title]');
  const modalBody = modal?.querySelector('[data-modal-body]');
  const closeButtons = modal ? [...modal.querySelectorAll('[data-modal-close]')] : [];
  const primaryCloseButton = closeButtons[0];
  let lastTrigger = null;

  const defaultTours = {
    pitti: {
      title: 'Palazzo Pitti and Boboli Garden',
      body: 'A visit through the former Medici residence, its decorated rooms and important painting collection, followed by a walk in the Boboli Garden and its views over Florence.'
    },
    florence: {
      title: 'The classic Florence city tour',
      body: 'A walking introduction to Florence through the cathedral area, medieval streets, civic architecture and Ponte Vecchio. The tour connects the city’s monuments with the families, workshops and stories that shaped Florence.'
    },
    markets: {
      title: 'Florence city and markets tour',
      body: 'A city walk that combines Florence’s history with its everyday food culture. Alongside the main sights, the route explores the atmosphere of the local market and the traditions behind Tuscan ingredients and cuisine.'
    },
    uffizi: {
      title: 'The Uffizi Gallery',
      body: 'A focused visit to the Uffizi, helping you read key works of the Renaissance through their stories, symbols, patrons and artistic techniques. Camilla’s background as an art conservator adds a practical perspective on how masterpieces were actually made.'
    },
    cathedral: {
      title: 'Santa Maria del Fiore and the Cathedral Square',
      body: 'Explore the Cathedral complex, its museum, Baptistery and Brunelleschi’s extraordinary dome. The visit places architecture, sculpture and engineering in the wider history of Florence.'
    },
    siena: {
      title: 'Siena city tour',
      body: 'Discover Siena’s medieval streets, Piazza del Campo, the Cathedral and the traditions that still shape the city. The route can be adapted to the time available and to your interests.'
    },
    towns: {
      title: 'Tuscan towns',
      body: 'Tuscany extends far beyond Florence. This tour can include historic towns such as Siena, Lucca, Pisa, San Gimignano or Volterra, combining art, architecture, local traditions, food and the landscape.'
    },
    countryside: {
      title: 'A day in the countryside',
      body: 'A slower experience of Tuscany outside the major cities: villages, villas, olive groves, local food traditions and the landscape itself. The day can be tailored to the area, season and interests of the group.'
    }
  };

  const tours = window.TOUR_COPY || defaultTours;

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastTrigger?.focus();
  }

  document.querySelectorAll('[data-tour]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!modal) return;
      const tour = tours[button.dataset.tour];
      if (!tour) return;
      lastTrigger = button;
      modalTitle.textContent = tour.title;
      modalBody.textContent = tour.body;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      primaryCloseButton?.focus();
    });
  });

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('is-open')) closeModal();
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
