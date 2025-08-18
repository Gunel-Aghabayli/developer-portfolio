const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  const isOpen = nav.classList.contains('active');
  burgerIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});

// === Quote Section ===
function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector(".quote").innerHTML = `
    <span class="left">❝</span>
    <blockquote>${randomQuote.message}</blockquote>
    <small>- ${randomQuote.author}</small>
    <span class="right">❞</span>
  `;
}
showQuote();

// === Projects Section ===
function showProjects(limit = 3) {
  const grid = document.querySelector(".projects-grid");
  grid.innerHTML = "";

  projects.slice(0, limit).forEach(project => {
    grid.innerHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${project.name}" class="project-image"/>
        <div class="project-tags">
          ${project.tags.map(tech => `<span>${tech}</span>`).join("")}
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

// "View all" projects functionality
document.querySelector(".second-part a").onclick = function(e) {
  e.preventDefault();
  showProjects(projects.length);
};

// === Skills Section ===
function showSkills() {
  const grid = document.querySelector(".skills-grid");
  grid.innerHTML = `
    <div class="skill-box"><h4>Languages</h4>${skills.languages.map(l => `<p>${l}</p>`).join("")}</div>
    <div class="skill-box"><h4>Styling</h4>${skills.styling.map(s => `<p>${s}</p>`).join("")}</div>
    <div class="skill-box"><h4>Tools</h4>${skills.tools.map(t => `<p>${t}</p>`).join("")}</div>
    <div class="skill-box"><h4>Frameworks</h4>${skills.frameworks.map(f => `<p>${f}</p>`).join("")}</div>
  `;
}
showSkills();

// === About Section ===
function showAbout() {
  const info = document.querySelector(".about-content .info div");
  info.innerHTML = `<p>${about.shortText}</p>`;
  
  document.querySelector(".about-content .project-links a").onclick = function(e) {
    e.preventDefault();
    info.innerHTML = `<p>${about.fullText}</p>`;
  };
}
showAbout();

// === Contact Section ===
function showContact() {
  const msg = document.querySelector(".message");
  msg.innerHTML = `
    <h3>Message me here</h3>
    <div class="reach"><img src="${contact.email.icon}" alt=""><a href="${contact.email.link}">${contact.email.text}</a></div>
    <div class="reach"><img src="${contact.discord.icon}" alt=""><a href="${contact.discord.link}">${contact.discord.text}</a></div>
  `;
}
showContact();
