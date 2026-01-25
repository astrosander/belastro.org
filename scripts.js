// Language switcher function
function switchLang(lang) {
  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if ((lang === 'en' && btn.textContent === 'English') || 
        (lang === 'ru' && btn.textContent === 'Русский')) {
      btn.classList.add('active');
    }
  });
  
  // Update body class
  if (lang === 'ru') {
    document.body.classList.add('lang-ru');
  } else {
    document.body.classList.remove('lang-ru');
  }
  
  // Save preference
  try {
    localStorage.setItem('preferred-lang', lang);
  } catch (e) {
    console.log('LocalStorage not available');
  }
}

// Detect browser language and set default
function detectBrowserLanguage() {
  try {
    // Get browser language (e.g., 'ru-RU', 'ru', 'en-US', 'en', etc.)
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    // Check if language starts with 'ru' (covers ru, ru-RU, ru-BY, etc.)
    if (browserLang.toLowerCase().startsWith('ru')) {
      return 'ru';
    }
    return 'en';
  } catch (e) {
    return 'en';
  }
}

// Load saved language preference or detect from browser (runs as soon as script loads)
(function() {
  try {
    let lang = localStorage.getItem('preferred-lang');
    
    // If no saved preference, detect from browser
    if (!lang) {
      lang = detectBrowserLanguage();
      // Save the detected language as preference
      localStorage.setItem('preferred-lang', lang);
    }
    
    // Apply language class immediately if body exists
    if (document.body) {
      if (lang === 'ru') {
        document.body.classList.add('lang-ru');
      } else {
        document.body.classList.remove('lang-ru');
      }
    }
    
    // Ensure language is applied and buttons are updated when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        switchLang(lang);
      });
    } else {
      // DOM is already loaded, apply immediately
      switchLang(lang);
    }
  } catch (e) {
    console.log('LocalStorage not available');
    // Fallback: detect browser language and apply without saving
    const browserLang = detectBrowserLanguage();
    if (document.body) {
      if (browserLang === 'ru') {
        document.body.classList.add('lang-ru');
      } else {
        document.body.classList.remove('lang-ru');
      }
    }
    if (document.readyState !== 'loading') {
      switchLang(browserLang);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        switchLang(browserLang);
      });
    }
  }
})();

// Set current year (runs when DOM is ready)
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = currentYear;
  });
});

// Smooth scrolling (runs when DOM is ready)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Fix file links with special characters for file:// protocol
document.addEventListener('DOMContentLoaded', function() {
  // Only apply for file:// protocol
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('a[href^="files/"]').forEach(link => {
      const href = link.getAttribute('href');
      // Encode the path components properly
      const parts = href.split('/');
      const encodedParts = parts.map((part, index) => {
        // Don't encode the first part "files"
        if (index === 0) return part;
        // Encode each part of the path
        return encodeURIComponent(part);
      });
      link.setAttribute('href', encodedParts.join('/'));
    });
  }
});

