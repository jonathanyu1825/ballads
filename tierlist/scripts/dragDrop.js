export function setUpMusicDragDrop() {
  const musicHolder = document.getElementById("music-holder");
  musicHolder.addEventListener("dragstart", (event) => {
    if (event.target.classList == "music-element") {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.dataTransfer.effectAllowed = "move";
    }
  });
  musicHolder.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  musicHolder.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);
    musicHolder.appendChild(draggedElement);
  });
}

export function setUpTierDragDrop() {
    const tierHolder = document.getElementById("tier-holder");
  tierHolder.addEventListener("dragover", (event) => {
    if (event.target.classList.contains("tier-drop-zone")) {
      event.preventDefault();
    }
  });
  tierHolder.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);

    const tier = event.target.closest(".tier-drop-zone");
    tier.appendChild(draggedElement);
  });
}

export function addNewTier() {
  
}
