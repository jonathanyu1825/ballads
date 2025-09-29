import { setUpMusicDragDrop } from './dragDrop.js';
import { setUpTierDragDrop } from './dragDrop.js';
import { addNewTier } from './dragDrop.js';

document.addEventListener("DOMContentLoaded", () => {
  setUpMusicDragDrop();
  setUpTierDragDrop();
  addNewTier();

  let searchBarContainer = document.getElementById("main-page-nav-search");
  let searchBar = document.getElementById("main-page-search");
  
  let resultHolder = document.getElementById("result-holder");
  searchBarContainer.addEventListener("keydown", async (event) => {
    if (event.key == "Enter") {
      resultHolder.innerHTML = "";
      removeCurrentResults();
      let userSearch = searchBar.value;
      searchBarContainer.classList.add("expanded");
      try {
        const results = await performSearch(userSearch);
        const topResults = results.tracks.items;

        for (let i = 0; i < topResults.length; i++) {
          let result = topResults[i];
          let artist = parseArtists(result.artists);
          let name = result.name;
          let imageURL = result.album.images[0].url;

          const newTrackElement = createTrackElement(artist, name, imageURL);
          resultHolder.appendChild(newTrackElement);
        }
      } catch {
        console.error("Error");
      }
    }
  });

  function removeCurrentResults() {
    
  }

  function parseArtists(artists) {
    let artistNames = artists.map(artist => artist.name).join(', ');
    return artistNames;
  }

  function createTrackElement(artist, name, imageURL) {
    const searchResult = document.createElement("div");
    searchResult.classList.add("search-result");

    const trackImage = document.createElement("img");
    trackImage.src = imageURL;
    trackImage.classList.add("image-result");

    const trackResult = document.createElement("div");
    trackResult.classList.add("track-result");

    const trackName = document.createElement("p");
    trackName.classList.add("track-name");
    trackName.textContent = name;

    const artistName = document.createElement("p");
    artistName.classList.add("artist-name");
    artistName.textContent = artist;

    const addResult = document.createElement("div");
    addResult.classList.add("add-result");

    const plusSign = document.createElement("div");
    plusSign.classList.add("add-element");
    plusSign.textContent = "+";

    trackResult.appendChild(trackName);
    trackResult.appendChild(artistName);

    addResult.appendChild(plusSign);

    searchResult.appendChild(trackImage);
    searchResult.appendChild(trackResult);
    searchResult.appendChild(addResult);

    return searchResult;
  }

  // <div class="search-result">
  //             <img id="test-result" src="images/mbdtf.jpg" />
  //             <div class = "name-result">
  //               <p class = "name1"> Runaway </p>
  //               <p class = "name2"> Kanye West </p>
  //             </div>
  //             <div class = "add-result">
  //               <div class = "add-element""> + </div>
  //             </div>
  //           </div>

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

  const musicSearch = document.getElementById("main-page-nav-search");
  musicSearch.addEventListener("click", (event) => {
    let clickedElement = event.target;
    if (clickedElement.classList.contains("add-element")) {
      let addResult = clickedElement.parentElement;
      if (!addResult.classList.contains("added")) {
        addResult.classList.add("added");
        clickedElement.textContent = "Added";
      } else {
        addResult.classList.remove("added");
        clickedElement.textContent = "+";
      }
    }
  });
});
