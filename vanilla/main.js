let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  updateTranslations();
  updateUI();
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[currentLang], key);
    if (translation) {
      if (Array.isArray(translation)) {
        // Handle lists (like in CommonProblems)
        el.innerHTML = translation.map(item => `
          <li class="flex items-start gap-3 text-slate-600 font-medium">
            <i data-lucide="check-circle-2" class="text-indigo-500 mt-1 shrink-0 w-4 h-4"></i>
            <span>${item}</span>
          </li>
        `).join('');
      } else {
        el.textContent = translation;
      }
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = getNestedTranslation(translations[currentLang], key);
    if (translation) el.placeholder = translation;
  });

  lucide.createIcons();
}

function getNestedTranslation(obj, key) {
  return key.split('.').reduce((p, c) => p && p[c], obj);
}

function updateUI() {
  // Update button text for language switcher
  const langToggle = document.getElementById('lang-toggle-text');
  if (langToggle) {
    langToggle.textContent = currentLang === 'ar' ? 'English' : 'عربي';
  }
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden', !isMenuOpen);
  menuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
  lucide.createIcons();
}

menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking links
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('py-3', 'shadow-sm', 'glass');
    nav.classList.remove('py-5');
  } else {
    nav.classList.remove('py-3', 'shadow-sm', 'glass');
    nav.classList.add('py-5');
  }
});

// Swiper Initialization
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: '.custom-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Language Switcher
document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// Animations (Simple Fade In)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
  observer.observe(el);
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  const nameInput = contactForm.querySelector('input[name="name"]');
  const phoneInput = contactForm.querySelector('input[name="phone"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const deviceSelect = contactForm.querySelector('select[name="device"]');
  const issueSelect = contactForm.querySelector('select[name="issue"]');

  // Validations
  if (nameInput.value.trim().length < 3) {
    alert(translations[currentLang].contact.messages.nameError);
    return;
  }

  const phoneRegex = /^01[0125][0-9]{8}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    alert(translations[currentLang].contact.messages.phoneError);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert(translations[currentLang].contact.messages.emailError);
    return;
  }

  if (!deviceSelect.value) {
    alert(translations[currentLang].contact.messages.deviceError);
    return;
  }

  if (!issueSelect.value) {
    alert(translations[currentLang].contact.messages.issueError);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = translations[currentLang].contact.form.sending;

  try {
    const formData = new FormData(contactForm);
    // Map vanilla names to PHP/EmailJS names if needed, 
    // but here we just send them as is to send_mail.php
    
    const response = await fetch('send_mail.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      window.location.href = 'thanks.html';
    } else {
      alert(translations[currentLang].contact.form.error);
    }
  } catch (error) {
    alert(translations[currentLang].contact.form.error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

// Initial Setup
setLanguage(currentLang);
lucide.createIcons();
