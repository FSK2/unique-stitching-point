// Unique Stitching Point - Application JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Setup ---
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('usp_theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeToggle) themeToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark');
    if (themeToggle) themeToggle.checked = false;
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('usp_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('usp_theme', 'light');
      }
    });
  }

  // --- Language Switcher Setup ---
  const langToggle = document.getElementById('lang-toggle');
  const savedLang = localStorage.getItem('usp_lang') || 'en';

  function applyLanguage(lang) {
    const isUrdu = lang === 'ur';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isUrdu ? 'rtl' : 'ltr');
    if (isUrdu) {
      document.body.classList.add('lang-ur');
    } else {
      document.body.classList.remove('lang-ur');
    }

    // Update all elements with data-en and data-ur attributes
    document.querySelectorAll('[data-en][data-ur]').forEach((el) => {
      const text = isUrdu ? el.getAttribute('data-ur') : el.getAttribute('data-en');
      if (text) {
        // Handle input placeholders or textContent
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update toggle switch state if exists
    if (langToggle) {
      langToggle.checked = isUrdu;
    }

    localStorage.setItem('usp_lang', lang);
  }

  applyLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener('change', (e) => {
      const selectedLang = e.target.checked ? 'ur' : 'en';
      applyLanguage(selectedLang);
    });
  }

  // --- Mobile Menu Toggle ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // --- Booking Modal Interactivity ---
  const bookingModal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const bookingForm = document.getElementById('booking-form');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const presetService = btn.getAttribute('data-service');
      if (presetService && bookingForm) {
        const serviceSelect = bookingForm.querySelector('#booking-service');
        if (serviceSelect) serviceSelect.value = presetService;
      }
      if (bookingModal) bookingModal.classList.add('active');
    });
  });

  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('active');
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  // --- WhatsApp Booking Form Submission ---
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const service = document.getElementById('booking-service').value;
      const date = document.getElementById('booking-date').value;
      const notes = document.getElementById('booking-notes').value.trim();

      const messageText = `✨ *New Tailoring Consultation Request* ✨\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `👗 *Service:* ${service}\n` +
        `📅 *Preferred Date:* ${date || 'As soon as possible'}\n` +
        `📝 *Notes/Measurements:* ${notes || 'None'}\n\n` +
        `Sent via Unique Stitching Point Website`;

      const whatsappNumber = '923486567127';
      const encodedMsg = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
      if (bookingModal) bookingModal.classList.remove('active');
      bookingForm.reset();
    });
  }
});
