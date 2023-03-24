// Select all draggable tasks and swim lanes
const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

// Add dragstart and dragend event listeners to each draggable task
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging"); // Add is-dragging class when task is being dragged
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging"); // Remove is-dragging class when task has been dropped
  });
});

// Add dragover event listener to each swim lane
droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent default browser behavior of not allowing drop

    // Find the task below where the dragged task should be inserted
    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    // If there is no task below, append the dragged task to the end of the swim lane
    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      // Otherwise, insert the dragged task above the task that is below it
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

// Helper function to find the task below where the dragged task should be inserted
const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    // Find the closest task that is below the dragged task
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};