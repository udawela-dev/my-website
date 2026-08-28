// Highlights the nav link of the section currently in view, and adds a shadowed background to the sticky navbar once scrolled past the hero.
function highlightActiveSection() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const hero = document.getElementById('hero');
  const SCROLL_OFFSET = 8;

  navbar.classList.toggle('scrolled', window.scrollY > hero.offsetHeight);

  let currentSectionId = '';
  for (const link of navLinks) {
    const section = document.getElementById(link.dataset.section);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      if (window.scrollY >= sectionTop - SCROLL_OFFSET && window.scrollY < sectionBottom - SCROLL_OFFSET) {
        currentSectionId = link.dataset.section;
      }
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === currentSectionId);
  });
}

window.addEventListener('scroll', highlightActiveSection);

// Flips a player card (3D rotate) so its back face with stats is revealed, and flips it back when clicked again.
function flipCard() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

flipCard();

// Toggles a rule's answer open or closed, and closes any other open accordion so only one is expanded at a time.
function toggleAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const button = item.querySelector('.acc-btn');
    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accordionItems.forEach((other) => other.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

toggleAccordion();

// Filters the match cards to show only the selected status, and highlights the active filter button.
function filterMatches() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const matchCards = document.querySelectorAll('.match-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedStatus = button.dataset.status;

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      matchCards.forEach((card) => {
        const cardStatus = card.dataset.status;
        const shouldShow = selectedStatus === 'all' || cardStatus === selectedStatus;
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });
}

filterMatches();

// Plays a short click sound whenever the user taps any button or nav link that has audio available.
function playClickSound() {
  const clickSound = document.getElementById('click-sound');
  if (!clickSound) {
    return;
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('button, a')) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  });
}

playClickSound();
