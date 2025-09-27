import { setUpMusicDragDrop } from './dragDrop.js';
import { setUpTierDragDrop } from './dragDrop.js';
import { addNewTier } from './dragDrop.js';

document.addEventListener("DOMContentLoaded", () => {
  setUpMusicDragDrop();
  setUpTierDragDrop();
  addNewTier();

  function createTier() {
    const newTier = document.createElement("div");
  }

  let searchBarContainer = document.getElementById("main-page-nav-search");
  let searchBar = document.getElementById("main-page-search");
  
  let testResult = document.getElementById("test-result");
  searchBarContainer.addEventListener("keydown", async (event) => {
    if (event.key == "Enter") {
      let userSearch = searchBar.value;
      searchBarContainer.classList.add("expanded");
      try {
        const results = await performSearch(userSearch);
        let topResults = results.albums.items;
        console.log(topResults);
        for (let i = 0; i < 1; i++) {
          let picture = topResults[0].images[0].url;
          testResult.src = picture;
          // what do we need?

          // picture
          // name
          // artist

        }
      } catch {
        console.error("Error");
      }
    }
  });

  const mainPage = document.getElementById("main-page");
  mainPage.addEventListener("click", (event) => {
    if (searchBar.classList.contains("expanded") && event.target.id != "main-page-nav-search") {
      searchBar.classList.remove("expanded");
    }
  });

  async function performSearch(query) {
    // const url = `http://localhost:3000/api/search/${encodeURIComponent(query)}`;
    const url = `http://34.138.234.164:80/api/search/${encodeURIComponent(query)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }
});
