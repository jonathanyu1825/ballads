document.addEventListener("DOMContentLoaded", () => {
  const musicElements = document.querySelectorAll(".music-element");
  musicElements.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.dataTransfer.effectAllowed = "move";
    });
  });

  const tiers = document.querySelectorAll(".tier");
  tiers.forEach((tier) => {
    tier.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    tier.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(id);
      tier.appendChild(draggedElement);
    });
  });
});
