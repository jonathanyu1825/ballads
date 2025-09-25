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
  tierHolder.addEventListener("dragstart", (event) => {
    if (event.target.classList.contains("music-element")) {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.dataTransfer.effectAllowed = "move";
    }
  });
}

export function addNewTier() {
  const tierHolder = document.getElementById("tier-holder");
  tierHolder.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-tier")) {
      const newTier = document.createElement("div");
      newTier.classList.add("tier");

      const newDropZone = document.createElement("div");
      newDropZone.classList.add("tier-drop-zone");

      const newSign = document.createElement("div");
      newSign.classList.add("sign");
      newSign.style.backgroundColor = "lightblue";
      newSign.setAttribute("contenteditable", "true");
      newSign.textContent = "Edit Tier";

      const newAddTierButton = document.createElement("div");
      newAddTierButton.textContent = "+";
      newAddTierButton.classList.add("add-tier");

      newTier.appendChild(newSign);
      newTier.appendChild(newDropZone);
      newSign.appendChild(newAddTierButton);

      tierHolder.appendChild(newTier);
    }
  });
}
