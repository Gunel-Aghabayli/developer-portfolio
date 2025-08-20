const grid = document.querySelector(".projects-grid");
const emailEl = document.querySelector(".footer-left .email");
const socialIcons = document.querySelector(".footer-right .social-icons");

function showAllProjects() {
  grid.innerHTML = ""; 

  projects.forEach(project => {
    grid.innerHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${project.name}" class="project-image"/>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-content">
          <h3><a href="#">${project.name}</a></h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" target="_blank">Github =></a>
          </div>
        </div>
      </div>
    `;
  });
}

showAllProjects();

function showFooter() {
  emailEl.textContent = footer.email.text;
  emailEl.href = footer.email.link;
  socialIcons.innerHTML = footer.socials
    .map(s => `<a href="${s.link}" target="_blank"><img src="${s.icon}" alt="${s.alt}"></a>`)
    .join("");
}
showFooter();
