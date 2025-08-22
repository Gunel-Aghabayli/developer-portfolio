const burgerMenu = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav");
const quote = document.querySelector(".quote");
const grid = document.querySelector(".projects-grid");
const skillsGrid = document.querySelector(".skills-grid");
const aboutInfo = document.querySelector(".about-content .info div");
const aboutLink = document.querySelector(".about-content .project-links a");
const message = document.querySelector(".message");
const showAllProjectsBtn = document.querySelector(".second-part a");
const emailEl = document.querySelector(".footer-left .email");
const socialIcons = document.querySelector(".footer-right .social-icons");
const projectsPageGrid = document.querySelector(".projects-grid-all");

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : "en";

  quote.innerHTML = `
    <span class="left">❝</span>
    <blockquote>${randomQuote.message[lang]}</blockquote>
    <small>- ${randomQuote.author[lang]}</small>
    <span class="right">❞</span>
  `;
}

function showProjects(limit = 3) {
  grid.innerHTML = "";
  const limitedProjects = projects.slice(0, limit);
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : "en";

  limitedProjects.forEach((project) => {
    grid.innerHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${
      project.name[lang]
    }" class="project-image"/>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-content">
          <h3><a href="#">${project.name[lang]}</a></h3>
          <p>${project.description[lang]}</p>
          <div class="project-links">
            <a href="${project.github}">Github =></a>
          </div>
        </div>
      </div>
    `;
  });
}

function showAbout() {
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : "en";
  aboutInfo.innerHTML = `<p>${about.shortText[lang]}</p>`;
}

window.addEventListener("languageChanged", function (e) {
  const lang = e.detail;
  showQuote();
  showProjects(3);
  showAbout();
  showContact();
});

showAllProjectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  showProjects(projects.length);
});

function showSkills() {
  skillsGrid.innerHTML = `
    <div class="skill-box"><h4>Languages</h4>${skills.languages
      .map((l) => `<p>${l}</p>`)
      .join("")}</div>
    <div class="skill-box"><h4>Styling</h4>${skills.styling
      .map((s) => `<p>${s}</p>`)
      .join("")}</div>
    <div class="skill-box"><h4>Tools</h4>${skills.tools
      .map((t) => `<p>${t}</p>`)
      .join("")}</div>
    <div class="skill-box"><h4>Frameworks</h4>${skills.frameworks
      .map((f) => `<p>${f}</p>`)
      .join("")}</div>
  `;
}
showSkills();

function showContact() {
  message.innerHTML = `
    <h3>Message me here</h3>
    <div class="reach"><img src="${contact.email.icon}" alt=""><a href="${contact.email.link}">${contact.email.text}</a></div>
    <div class="reach"><img src="${contact.discord.icon}" alt=""><a href="${contact.discord.link}">${contact.discord.text}</a></div>
  `;
}
showContact();

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
