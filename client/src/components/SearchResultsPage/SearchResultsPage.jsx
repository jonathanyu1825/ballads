import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";
import SearchResult from "../SearchResult";
import "./SearchResultsPage.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function SearchResultsPage() {
  const { query } = useParams();

  const [albumResults, setAlbumResults] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);

  const [displayedResults, setDisplayedResults] = useState([]);
  const [displayType, setDisplayType] = useState("");

  const updateDisplayedResults = (results, type) => {
    setDisplayedResults(results);
    setDisplayType(type);
  };

  async function performSearch(query) {
    const url = `https://api.ballads.live/api/search/${encodeURIComponent(
      query
    )}`;
    // const url = `http://localhost:3000/api/search/${encodeURIComponent(query)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    // do all of this on the backend
    // this will also help to store on redis cache and limit storage


    performSearch(query).then((data) => {

      console.log(data);
      const initialDisplay = data.albums;
      setAlbumResults(data.albums);
      setTrackResults(data.tracks);
      setArtistResults(data.artists);

      setDisplayedResults(initialDisplay);
      setDisplayType("albums");
    });
  }, [query]);

  // function parseAlbums(albums) {
  //   let parsedAlbums = [];
  //   albums.forEach((album) => {
  //     parsedAlbums.push({
  //       id: album.id,
  //       image: album.images[0].url,
  //       name: album.name,
  //       subtitle: parseAlbumArtists(album.artists),
  //     });
  //   });
  //   return parsedAlbums;
  // }

  // function parseAlbumArtists(albumArtists) {
  //   let res = [];
  //   albumArtists.forEach((artist) => {
  //     res.push(artist.name);
  //   });
  //   return res.join(", ");
  // }
  // function parseTracks(tracks) {
  //   let parsedTracks = [];
  //   tracks.forEach((track) => {
  //     parsedTracks.push({
  //       id: track.id,
  //       image: track.album.images[0].url,
  //       name: track.name,
  //       subtitle: parseAlbumArtists(track.artists)
  //     });
  //   });
  //   return parsedTracks;
  // }
  // function parseArtists(artists) {
  //   let parsedArtists = [];
  //   artists.forEach((artist) => {
  //     parsedArtists.push({
  //       id: artist.id,
  //       image: artist.images?.[0]?.url,
  //       name: artist.name,
  //       subtitle: parseArtistType(artist.genres)
  //     });
  //   });
  //   return parsedArtists;
  // }

  // function parseArtistType(artistGenres) {
  //   let genres = artistGenres.join(", ");
  //   if (genres != "") {
  //     return "artist ○ " + artistGenres.join(", ");
  //   }
  //   return "artist";
    
  // }

  useEffect(() => {
    console.log(artistResults);
  });

  return (
    <div id="search-results-page">
      <div id="results-page">
        <ContentHolder width="100%" height="100%" flexCenter={false}>
          <BlackBackground />
          <h1 class="user-search-result"> results: {query} </h1>
          <hr class="horizontal-line" />
          <div id="search-results">
            {displayedResults.map((result) => (
              <SearchResult
                resultID={result.id}
                resultName={result.name}
                imageURL={
                  result.image || "/pictures/defaultartist.png"
                }
                subtitle={result.subtitle}
                resultType={displayType}
              />
            ))}
          </div>
        </ContentHolder>
      </div>
      <div>
        <ContentHolder
          margin="0px 0px 0px 25px"
          width="350px"
          height="500px"
          flexCenter={false}
        >
          <BlackBackground />
          <div>
            <h1 class="show-results"> Show Results For: </h1>
          </div>
          <hr class="horizontal-line" />
          <div class="show-results-holder">
            <h1 class="result-type"> All </h1>
          </div>
          <div
            class="show-results-holder"
            onClick={() => updateDisplayedResults(albumResults, "albums")}
          >
            <h1 class="result-type">Albums</h1>
          </div>
          <div
            class="show-results-holder"
            onClick={() => updateDisplayedResults(trackResults, "tracks")}
          >
            <h1 class="result-type">Track</h1>
          </div>
          <div
            class="show-results-holder"
            onClick={() => updateDisplayedResults(artistResults, "artists")}
          >
            <h1 class="result-type">Artist</h1>
          </div>
        </ContentHolder>
      </div>
    </div>

    // have content holders inside divs and move divs around accordingly
  );
}
