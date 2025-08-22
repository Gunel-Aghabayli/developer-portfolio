 const translations = {
  en: {
    home: "home",
    projects: "projects",
    about: "about-me",
    contact: "contact",
    heroHeading: "I’m not just here to code, I’m here to make the web feel human.",
    heroText: "Simple, responsive, and a little bit obsessed with detail.",
    contactBtn: "Contact Me =>",
    viewAll: "View all =>",
    skills: "skills",
    contactJob: "I’m open to freelance and full-time job opportunities. If you have any requests or questions, feel free to get in touch.",
    footerTagline: "Web designer and front-end developer based in Azerbaijan",
    footerCopyright: "© Copyright 2025. Made by Gunel",
    who:"Who am I?",
    funfacts:"fun-facts",
    education:"education",
    project:"projects",
    allProjects:"All of projects",
    decent:"decent",
    message:"Message me here"
  },
  az: {
    home: "ana səhifə",
    projects: "layihələr",
    about: "haqqımda",
    contact: "əlaqə",
    heroHeading: "Mən sadəcə kod yazmaq üçün deyil, vebi insan kimi hiss etdirmək üçün buradayam.",
    heroText: "Sadə, responsiv və detallara diqqətli",
    contactBtn: "Əlaqə saxla=>",
    viewAll: "Hamısına bax =>",
    skills: "bacarıqlar",
    contactJob: "Mən freelance və full-time iş imkanlarına açığam. Hər hansı bir sorğunuz və ya sualınız varsa, mənimlə əlaqə saxlaya bilərsiniz.",
    footerTagline: "Veb dizayner və front-end developer(Azerbaycan,Bakı)",
    footerCopyright: "© Copyright 2025. Gunel tərəfindən hazırlanıb",
    who:"Mən kiməm?",
    funfacts:"maraqlı faktlar",
    education:"təhsil",
    project:"layihələr",
    allProjects:"Bütün layihələr",
    decent:"sonuncu",
    message:"Mənimlə əlaqə saxla"
  }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langSelectors = document.querySelectorAll('.lang select, #langSelect');
  langSelectors.forEach(selector => {
    if (selector) selector.value = lang;
  });
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}

document.addEventListener('DOMContentLoaded', function() {
  const langSelectors = document.querySelectorAll('.lang select, #langSelect');
  langSelectors.forEach(selector => {
    if (selector) {
      selector.value = currentLanguage;
      selector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }
  });
  
  setLanguage(currentLanguage);
});

window.getCurrentLanguage = function() {
  return currentLanguage;
}
