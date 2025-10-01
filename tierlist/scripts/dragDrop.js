import { tierListData } from './script.js';

export function setUpMusicDragDrop() {
  const musicHolder = document.getElementById("music-holder");
  musicHolder.addEventListener("dragstart", (event) => {
    if (event.target.classList == "music-element") {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.dataTransfer.effectAllowed = "move";
    }
  });
  let closestElement = null;
  musicHolder.addEventListener("dragover", (event) => {
    event.preventDefault();
    closestElement = getClosestElement(musicHolder, event.x, event.y);
  });
  musicHolder.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);
    musicHolder.insertBefore(draggedElement, closestElement);
  });
}
// double check if this works
export function getClosestElement(container, x, y) {
  const nonDraggedElements = [...container.querySelectorAll('.music-element:not(.dragging)')]
  let closest = { distance: Infinity, element: null };

  nonDraggedElements.forEach(element => {
    const elementDimensions = element.getBoundingClientRect();

    // width not working
    const centerX = elementDimensions.left + elementDimensions.width / 2;
    const centerY = elementDimensions.bottom + elementDimensions.height / 2;

    const offsetX = x - centerX;
    const offsetY = y - centerY;


    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

    if (distance < closest.distance) {
      closest = {distance: distance, element: element}
    }
  });
  return closest.element;
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
    
    // console.log(tier);
    // let imageURL = getComputedStyle(draggedElement).getPropertyValue("--bg-image").trim();
    // let name = draggedElement.firstChild.textContent;

    // let item = { imageURL: imageURL, name: name};

    // figure out how to add tiers to data before dealing with elements

    
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
      const clickedTier = event.target.closest(".tier");
      
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

      clickedTier.after(newTier);
    }

    if (event.target.classList.contains("delete-tier") && tierHolder.children.length > 1) {
      const clickedTier = event.target.closest(".tier");
      clickedTier.remove();
    }
  });
}