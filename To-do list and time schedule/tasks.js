// Get references to the form, input, and todo lane elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  const value = input.value;

  // If input value is empty, return
  if (!value) return;

  // Create a new task element and add it to the todo lane
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  // Add dragstart and dragend event listeners to the new task
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging"); // Add is-dragging class when task is being dragged
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging"); // Remove is-dragging class when task has been dropped
  });

  todoLane.appendChild(newTask);

  input.value = "";
});