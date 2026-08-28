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

// Toggles the looping background music on or off, updating the button label and aria state to match.
function toggleBackgroundMusic() {
  const music = document.getElementById('background-music');
  const toggleButton = document.getElementById('music-toggle');
  if (!music || !toggleButton) {
    return;
  }

  toggleButton.addEventListener('click', async () => {
    try {
      if (music.paused) {
        await music.play();
        toggleButton.textContent = 'Pause Music';
        toggleButton.setAttribute('aria-pressed', 'true');
      } else {
        music.pause();
        toggleButton.textContent = 'Play Music';
        toggleButton.setAttribute('aria-pressed', 'false');
      }
    } catch (error) {
      toggleButton.textContent = 'Play Music';
      toggleButton.setAttribute('aria-pressed', 'false');
    }
  });
}

toggleBackgroundMusic();

// Handles the mobile navigation sidebar, the season-details sidebar, and the shared overlay.
function initDrawers() {
  const navSidebar = document.getElementById('sidebar');
  const detailSidebar = document.getElementById('detail-sidebar');
  const overlay = document.getElementById('overlay');
  const navToggle = document.getElementById('sidebar-toggle');
  const navClose = document.getElementById('sidebar-close');
  const detailOpen = document.getElementById('explore-btn');
  const detailClose = document.getElementById('detail-close');

  function setNav(open) {
    if (!navSidebar) return;
    navSidebar.classList.toggle('open', open);
    if (navToggle) navToggle.setAttribute('aria-expanded', String(open));
  }

  function setDetail(open) {
    if (!detailSidebar) return;
    detailSidebar.classList.toggle('open', open);
    detailSidebar.setAttribute('aria-hidden', String(!open));
  }

  function syncOverlay() {
    if (!overlay) return;
    const show = (navSidebar && navSidebar.classList.contains('open')) || (detailSidebar && detailSidebar.classList.contains('open'));
    overlay.classList.toggle('show', show);
  }

  function closeAll() {
    setNav(false);
    setDetail(false);
    syncOverlay();
  }

  if (navToggle) navToggle.addEventListener('click', () => { setNav(true); syncOverlay(); });
  if (navClose) navClose.addEventListener('click', closeAll);
  if (detailOpen) detailOpen.addEventListener('click', () => { setDetail(true); syncOverlay(); });
  if (detailClose) detailClose.addEventListener('click', closeAll);
  if (overlay) overlay.addEventListener('click', closeAll);

  if (navSidebar) {
    navSidebar.querySelectorAll('.nav-link').forEach((link) =>
      link.addEventListener('click', closeAll)
    );
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });
}

initDrawers();
