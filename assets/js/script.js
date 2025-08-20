const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.nav');
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

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList.contains('active')) {
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});


function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quote.innerHTML = `
    <span class="left">❝</span>
    <blockquote>${randomQuote.message}</blockquote>
    <small>- ${randomQuote.author}</small>
    <span class="right">❞</span>
  `;
}
showQuote();


function showProjects(limit = 3) {
  grid.innerHTML = "";
  const limitedProjects = projects.slice(0, limit);
  limitedProjects.forEach(project => {
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
            <a href="${project.github}">Github =></a>
          </div>
        </div>
      </div>
    `;
  });
}
showProjects(3);


showAllProjectsBtn.addEventListener("click", function(e) {
  e.preventDefault();
  showProjects(projects.length);
});


function showSkills() {
  skillsGrid.innerHTML = `
    <div class="skill-box"><h4>Languages</h4>${skills.languages.map(l => `<p>${l}</p>`).join("")}</div>
    <div class="skill-box"><h4>Styling</h4>${skills.styling.map(s => `<p>${s}</p>`).join("")}</div>
    <div class="skill-box"><h4>Tools</h4>${skills.tools.map(t => `<p>${t}</p>`).join("")}</div>
    <div class="skill-box"><h4>Frameworks</h4>${skills.frameworks.map(f => `<p>${f}</p>`).join("")}</div>
  `;
}
showSkills();


function showAbout() {
  aboutInfo.innerHTML = `<p>${about.shortText}</p>`;
}
showAbout();


function showContact() {
  message.innerHTML = `
    <h3>Message me here</h3>
    <div class="reach"><img src="${contact.email.icon}" alt=""><a href="${contact.email.link}">${contact.email.text}</a></div>
    <div class="reach"><img src="${contact.discord.icon}" alt=""><a href="${contact.discord.link}">${contact.discord.text}</a></div>
  `;
}
showContact();

function showFooter() {
  emailEl.textContent = footer.email.text;
  emailEl.href = footer.email.link;
  socialIcons.innerHTML = footer.socials
    .map(s => `<a href="${s.link}" target="_blank"><img src="${s.icon}" alt="${s.alt}"></a>`)
    .join("");
}
showFooter();
