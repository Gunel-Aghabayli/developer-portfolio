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
    decent:"decent"
  },
  az: {
    home: "ana səhifə",
    projects: "layihələr",
    about: "haqqımda",
    contact: "əlaqə",
    heroHeading: "Mən sadəcə kod yazmaq üçün deyil, vebi insan kimi hiss etdirmək üçün buradayam.",
    heroText: "Sadə, responsiv və detallara diqqətli",
    contactBtn: "Əlaqə =>",
    viewAll: "Hamısına bax =>",
    skills: "bacarıqlar",
    contactJob: "Mən freelance və full-time iş imkanlarına açığam. Hər hansı bir sorğunuz və ya sualınız varsa, mənimlə əlaqə saxlaya bilərsiniz.",
    footerTagline: "Azərbaycan əsaslı veb dizayner və front-end developer",
    footerCopyright: "© Copyright 2025. Gunel tərəfindən hazırlanıb",
    who:"Mən kiməm?",
    funfacts:"maraqlı faktlar",
    education:"təhsil",
    project:"layihələr",
    allProjects:"Bütün layihələr",
    decent:"sonuncu"
  }
};

const langSelector = document.querySelector(".lang select");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

setLanguage(langSelector.value);

langSelector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});
