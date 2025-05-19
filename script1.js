// script.js

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = "Invalid email address.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you for your message!";
  formMessage.style.color = "green";
  this.reset();
});

// To-Do List Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete ✖";
  delBtn.style.marginLeft = "10px";
  delBtn.style.background = "red";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
