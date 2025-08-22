const skillsGridTwo = document.querySelector(".skills-gridtwo");
const skillsGridText = document.querySelector(".skills-gridtext");
const info = document.querySelector(".info");
const emailEl = document.querySelector(".footer-left .email");
const socialIcons = document.querySelector(".footer-right .social-icons");

function showAbout() {
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';
  info.innerHTML = `<p>${about.fullText[lang]}</p>`;
}

function showEducation() {
  skillsGridTwo.innerHTML = "";
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';

  educationData.forEach((item) => {
    skillsGridTwo.innerHTML += `
      <div class="skill-boxtwo">
        <h4>${item.title[lang]}</h4>
        ${item.details.map(detail => `<p>${detail[lang]}</p>`).join("")}
      </div>
    `;
  });
}

function showFunFacts() {
  skillsGridText.innerHTML = "";
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';
  
  funFacts.forEach((fact) => {
    skillsGridText.innerHTML += `
      <div class="skill-boxtext">
        <p>${fact[lang]}</p>
      </div>
    `;
  });
}

window.addEventListener('languageChanged', function(e) {
  const lang = e.detail;
  showAbout();
  showEducation();
  showFunFacts();
});

showAbout();
showEducation();
showFunFacts();

function showFooter() {
  emailEl.innerHTML = footer.email.text;
  emailEl.href = footer.email.link;
  socialIcons.innerHTML = footer.socials
    .map(
      (item) =>
        `<a href="${item.link}" target="_blank"><img src="${item.icon}" alt="${item.alt}"></a>`
    )
    .join("");
}
showFooter();