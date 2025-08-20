const skillsGridTwo = document.querySelector(".skills-gridtwo");
const skillsGridText = document.querySelector(".skills-gridtext");
const info = document.querySelector(".info");
const emailEl = document.querySelector(".footer-left .email");
const socialIcons = document.querySelector(".footer-right .social-icons");

function showAbout() {
  info.innerHTML = `<p>${about.fullText}</p>`;
}
showAbout();

function showEducation() {
  skillsGridTwo.innerHTML = "";

  educationData.forEach((item) => {
    skillsGridTwo.innerHTML += `
      <div class="skill-boxtwo">
        <h4>${item.title}</h4>
        ${item.details.map((detail) => `<p>${detail}</p>`).join("")}
      </div>
    `;
  });
}

function showFunFacts() {
  skillsGridText.innerHTML = "";
  funFacts.forEach((fact) => {
    skillsGridText.innerHTML += `
      <div class="skill-boxtext">
        <p>${fact}</p>
      </div>
    `;
  });
}


showEducation();
showFunFacts();

function showFooter() {
  emailEl.innerHTML = footer.email.text;
  emailEl.href = footer.email.link;
  socialIcons.innerHTML = footer.socials
    .map(s => `<a href="${s.link}" target="_blank"><img src="${s.icon}" alt="${s.alt}"></a>`)
    .join("");
}
console.log(showFooter());