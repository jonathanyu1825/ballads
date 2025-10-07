let searchBarContainer = document.getElementById("main-page-nav-search");
let searchBar = document.getElementById("main-page-search");

let resultHolder = document.getElementById("result-holder");
const body = document.body;

let albumMap = {

};

let albumCount = 1;

function setupSearch() {
  searchBarContainer.addEventListener("keydown", async (event) => {
    if (event.key == "Enter") {
      resultHolder.innerHTML = "";
      let userSearch = searchBar.value;
      searchBarContainer.classList.add("expanded");
      try {
        const results = await performSearch(userSearch);

        // const topTrackResults = results.tracks.items;
        // for (let i = 0; i < topTrackResults.length; i++) {
        //   let result = topTrackResults[i];
        //   let artist = parseArtists(result.artists);
        //   let name = result.name;
        //   let type = "track";
        //   let imageURL = result.album.images[0].url;
        //   const newTrackElement = createTrackElement(type, artist, name, imageURL);
        //   resultHolder.appendChild(newTrackElement);
        // }

        const topAlbumResults = results.albums.items;

        for (let i = 0; i < topAlbumResults.length; i++) {
          let result = topAlbumResults[i];
          let artist = parseArtists(result.artists);
          let name = result.name;
          let imageURL = result.images[0].url;
          let albumId = result.id;
          let type = "album";
          let tracks = await fetchAlbumTracks(albumId);
          if (!albumMap[albumId]) {
            albumMap[albumCount] = tracks;
          }
          const newTrackElement = createTrackElement(type, artist, name, imageURL);
          newTrackElement.dataset.albumCount = albumCount;
          albumCount += 1;
          resultHolder.appendChild(newTrackElement);
        }


        // what do we need?
        // album cover
        // album name
        // list of tracks
        // need to associate data with album without displaying
      } catch {
        console.error("Error");
      }
    }
  });

  body.addEventListener("click", (event) => {
    let clickedElement = event.target;
    let isSearchBar = clickedElement.closest("#main-page-nav-search");
    if (
      isSearchBar == null &&
      searchBarContainer.classList.contains("expanded")
    ) {
      closeSearchBarContainer();
    }
  });
}

function closeSearchBarContainer() {
  resultHolder.innerHTML = "";
  searchBarContainer.classList.remove("expanded");
}

function parseArtists(artists) {
  let artistNames = artists.map((artist) => artist.name).join(", ");
  return artistNames;
}

function createTrackElement(type, artist, name, imageURL) {
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

  const addButtonHolder = document.createElement("div");
  addButtonHolder.classList.add("add-button-holder");

  const addElement = document.createElement("div");
  addElement.id = "add-element";
  addElement.classList.add("add-result");
  addElement.textContent = "+";

  

  trackResult.appendChild(trackName);
  trackResult.appendChild(artistName);

  addButtonHolder.appendChild(addElement);

  if (type == "album") {
    const addAlbumResults = document.createElement("div");
    addAlbumResults.id = "add-album-results";
    addAlbumResults.classList.add("add-result");
    addAlbumResults.textContent = "+";
    addButtonHolder.appendChild(addAlbumResults);
  } 
  console.log(addButtonHolder.children);


  searchResult.appendChild(trackImage);
  searchResult.appendChild(trackResult);
  searchResult.appendChild(addButtonHolder);

  return searchResult;
}

async function fetchAlbumTracks(albumId) {
  const url = `http://localhost:3000/api/get/album/${encodeURIComponent(albumId)}`;
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

// const mainPage = document.getElementById("main-page");
// mainPage.addEventListener("click", (event) => {
//   if (searchBar.classList.contains("expanded") && event.target.id != "main-page-nav-search") {
//     searchBar.classList.remove("expanded");
//   }
// });

async function performSearch(query) {
  const url = `http://localhost:3000/api/search/${encodeURIComponent(query)}`;
  // const url = `https://api.ballads.live/api/search/${encodeURIComponent(
  //   query
  // )}`;
  // const url = `http://34.138.234.164:80/api/search/${encodeURIComponent(query)}`;
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
const musicHolder = document.getElementById("music-holder");
let elementCount = 0;

function setupAddElement() {
  musicSearch.addEventListener("click", (event) => {
    let clickedElement = event.target;
    if (clickedElement.classList.contains("add-result")) {
      if (!clickedElement.classList.contains("added")) {
        clickedElement.classList.add("added");
        clickedElement.textContent = "Added";
        let newElement = clickedElement.parentElement.previousElementSibling;
        let newImage = "url(" + newElement.previousElementSibling.src + ")";
        if (clickedElement.id == "add-element") {
          let newElementTrack = newElement.querySelector(".track-name").textContent;
          musicHolder.appendChild(
            createNewElement(newImage, newElementTrack)
          );
        }
        else if (clickedElement.id == "add-album-results") {
          let albumKey = newElement.parentElement.dataset.albumCount;
          let albumTracks = albumMap[albumKey];
          for (let i = 0; i < albumTracks.length; i++) {
            // create elements and add to holder
            console.log(albumMap);
            musicHolder.appendChild(
              createNewElement(newImage, albumTracks[i])
            );
          }
          // find a formula for "all" search results
        }
      } else {
        clickedElement.classList.remove("added");
        clickedElement.textContent = "+";
      }
    }
  });
}

function createNewElement(newElementImage, newElementName) {
  console.log(newElementName);
  // let newElement = document.createElement("div");
  // newElement.classList.add("music-element");
  // newElement.id = "element-" + elementCount;
  // newElement.draggable = "true";
  // newElement.style.setProperty("--bg-image", newElementImage);

  // newElementTrack.classList.remove("track-name");
  // newElement.appendChild(newElementTrack);
  // return newElement;

  let newElement = document.createElement("div");
  newElement.classList.add("music-element");
  newElement.id = "element-" + elementCount;
  elementCount += 1;
  newElement.draggable = "true";
  newElement.style.setProperty("--bg-image", newElementImage);
  
  let newElementTitle = document.createElement("p");
  newElementTitle.textContent = newElementName;
  newElement.appendChild(newElementTitle);
  return newElement;
}

export { setupSearch, setupAddElement };
