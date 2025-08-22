const list = document.getElementById("projectList");
const form = document.getElementById("projectForm");
const addForm = document.getElementById("addForm");
const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const imageInput = document.getElementById("image");
const tagsInput = document.getElementById("tags");
const githubInput = document.getElementById("github");
const submitButton = form.querySelector("button");

let editingIndex = null;

function showProjects() {
  list.innerHTML = "";
  projects.forEach((p, i) => {
    list.innerHTML += `
      <li>
        <img src="${p.image}" alt="${p.name.en}">
        <h3><b>${p.name.en}</b></h3>
        <p>${p.description.en}</p>
        <small>Tags: ${p.tags.join(", ")}</small><br>
        <a href="${p.github}" target="_blank">GitHub</a>
        <div class="actions">
          <button class="edit" onclick="editProject(${i})">Edit</button>
          <button class="delete" onclick="deleteProject(${i})">Delete</button>
        </div>
      </li>
    `;
  });
}

function toggleAddForm() {
  addForm.classList.toggle("hidden");
  editingIndex = null;
  form.reset();
  submitButton.textContent = "Add Project";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProject = {
    name: { en: nameInput.value },
    description: { en: descInput.value },
    image: imageInput.value,
    tags: tagsInput.value.split(",").map((t) => t.trim()),
    github: githubInput.value,
  };

  if (editingIndex !== null) {
    projects[editingIndex] = newProject;
    editingIndex = null;
  } else {
    projects.push(newProject);
  }

  form.reset();
  addForm.classList.add("hidden");
  submitButton.innerHTML = "Add Project";
  showProjects();
});

function deleteProject(i) {
  projects.splice(i, 1);
  showProjects();
}

function editProject(i) {
  const p = projects[i];
  nameInput.value = p.name.en;
  descInput.value = p.description.en;
  imageInput.value = p.image;
  tagsInput.value = p.tags.join(", ");
  githubInput.value = p.github;
  editingIndex = i;
  addForm.classList.remove("hidden");
  submitButton.innerHTML = "Save Project";
}

showProjects();
