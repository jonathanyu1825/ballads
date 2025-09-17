document.addEventListener("DOMContentLoaded", () => {
  let musicElements = document.querySelectorAll(".music-element");
  musicElements.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.dataTransfer.effectAllowed = "move";
    });
    // element.addEventListener("click", (event) => {
    //   event.target.classList.add('element-outline');
    // });
  });
  const tiers = document.querySelectorAll(".tier-drop-zone");
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
  const musicHolder = document.getElementById("music-holder");
  musicHolder.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  musicHolder.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);
    musicHolder.appendChild(draggedElement);
  })
});
