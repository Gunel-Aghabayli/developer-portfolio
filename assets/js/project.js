const grid = document.querySelector(".projects-grid");
const emailEl = document.querySelector(".footer-left .email");
const socialIcons = document.querySelector(".footer-right .social-icons");

function showAllProjects() {
  grid.innerHTML = ""; 
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';

  projects.forEach(project => {
    grid.innerHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${project.name[lang]}" class="project-image"/>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-content">
          <h3><a href="#">${project.name[lang]}</a></h3>
          <p>${project.description[lang]}</p>
          <div class="project-links">
            <a href="${project.github}" target="_blank">Github =></a>
          </div>
        </div>
      </div>
    `;
  });
}

window.addEventListener('languageChanged', function(e) {
  showAllProjects();
});

showAllProjects();

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