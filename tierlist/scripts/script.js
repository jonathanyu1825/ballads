import { setUpMusicDragDrop } from './dragDrop.js';
import { setUpTierDragDrop } from './dragDrop.js';

document.addEventListener("DOMContentLoaded", () => {
  setUpMusicDragDrop();
  setUpTierDragDrop();

  // tierHolder.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("add-tier")) {
  //     createTier();
  //   }
  // });

  // function createTier() {
  //   const newTier = document.createElement("div");
  // }

  let searchBar = document.getElementById("main-page-nav-search");
  // figure out promises
  // add event listener
  
  searchBar.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      let userSearch = searchBar.value;

      performSearch(userSearch);
      searchBar.classList.add("expanded");
    }
  });

  async function performSearch(query) {
    const url = `http://localhost:3000/api/search/${encodeURIComponent(query)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
});
