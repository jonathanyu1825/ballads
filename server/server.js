import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import axios from "axios";
import { createClient } from "redis";
// https://github.com/redis/node-redis

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const client = createClient({
  username: "default",
  password: "FaA7oJzxcMAY43rk55GA9TdXi0RRPvoa",
  socket: {
    host: "redis-12788.c15.us-east-1-4.ec2.redns.redis-cloud.com",
    port: 12788,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

const clientID = "bc152b06b1154fa7971dddbfb0307c21";
const clientSecret = "8c915fb2b394463aacda06509bfa04f5";
let accessToken = null;
let expirationDate = 0;

async function getSpotifyToken(clientID, clientSecret) {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientID,
        client_secret: clientSecret,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    expirationDate = Date.now() + 3600 * 1000;
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token");
    return null;
  }
}

function isValid(accessToken) {
  return accessToken != null && Date.now() < expirationDate;
}

async function updateToken() {
  if (!isValid(accessToken)) {
    accessToken = await getSpotifyToken(clientID, clientSecret);
  }
}

function parseAlbums(albums) {
  let parsedAlbums = [];
  albums.forEach((album) => {
    parsedAlbums.push({
      id: album.id,
      image: album.images[0].url,
      name: album.name,
      subtitle: parseAlbumArtists(album.artists),
    });
  });
  return parsedAlbums;
}

function parseAlbumArtists(albumArtists) {
  let res = [];
  albumArtists.forEach((artist) => {
    res.push(artist.name);
  });
  return res.join(", ");
}
function parseTracks(tracks) {
  let parsedTracks = [];
  tracks.forEach((track) => {
    parsedTracks.push({
      id: track.id,
      image: track.album.images[0].url,
      name: track.name,
      subtitle: parseAlbumArtists(track.artists),
    });
  });
  return parsedTracks;
}
function parseArtists(artists) {
  let parsedArtists = [];
  artists.forEach((artist) => {
    parsedArtists.push({
      id: artist.id,
      image: artist.images?.[0]?.url,
      name: artist.name,
      subtitle: parseArtistType(artist.genres),
    });
  });
  return parsedArtists;
}

function parseArtistType(artistGenres) {
  let genres = artistGenres.join(", ");
  if (genres != "") {
    return "artist ○ " + artistGenres.join(", ");
  }
  return "artist";
}
async function searchSpotify(query) {
  const result = await client.get(query);
  if (result) {
    return JSON.parse(result);
  }

  await updateToken();
  try {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: query,
        // type: "track",
        type: "album,track,artist",
        limit: 20,
      },
    });
    let trackData = parseTracks(response.data.tracks.items);
    let albumData = parseAlbums(response.data.albums.items);
    let artistData = parseArtists(response.data.artists.items);

    let searchResults = {
      tracks: trackData,
      albums: albumData,
      artists: artistData,
    };
    await client.set(query, JSON.stringify(searchResults));
    return searchResults;
  } catch (error) {
    console.error("error searching spotify");
    return null;
  }
}

async function getElement(elementID, elementType) {
  await updateToken();
  const url = `https://api.spotify.com/v1/${elementType}/${elementID}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
    const trackData = response.data.tracks.items;
    let trackList = [];
    trackData.forEach((track) => {
      trackList.push(track.name);
    });
    return trackList;
  } catch (error) {
    console.error(`Error fetching album:`, error);
  }
}

app.get("/api/search/:query", async (req, res) => {
  const searchQuery = req.params.query;
  const results = await searchSpotify(searchQuery);
  res.json(results);
});



async function getAlbumTracks(albumID) {
  await updateToken();
  const url = `https://api.spotify.com/v1/albums/${albumID}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data.tracks.items);
    return response.data.tracks.items.map((trackInfo) => [trackInfo.name, trackInfo.id]);
  } catch (error) {
    console.error(`Error fetching album:`, error);
  }
}

async function getArtistGraphic(albumID) {
  await updateToken();
  const url = `https://api.spotify.com/v1/artists/${albumID}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.images[0].url;
  } catch (error) {
    console.error(`Error fetching artist graphic: `, error)
  }
}
app.get("/api/get/:elementType/:elementID", async (req, res) => {
  const elementID = req.params.elementID;

  const cachedResult = await client.get(elementID);
  if (cachedResult) {
    return res.json(JSON.parse(cachedResult));
  }

  const elementType = req.params.elementType;
  const result = await getElement(elementID, elementType);

  if (elementType == "albums") {
    console.log(result.tracks);
    let artistGraphic = await getArtistGraphic(result.artists[0].id);
    let albumObject = {
      name: result.name,
      popularity: result.popularity,
      artists: result.artists.map((artist) => artist.name).join(", "),
      image: result.images[0].url,
      date: result.release_date,
      album_tracks: result.tracks.items.map((trackInfo) => [trackInfo.name, trackInfo.id]),
      artist_graphic: artistGraphic
    };

    // redis call
    await client.set(elementID, JSON.stringify(albumObject));
    res.json(albumObject);
  } else if (elementType == "tracks") {
    let artistGraphic = await getArtistGraphic(result.artists[0].id);
    let albumTracks = await getAlbumTracks(result.album.id);
    let trackObject = {
      name: result.name,
      popularity: result.popularity,
      artists: result.artists.map((artist) => artist.name).join(", "),
      image: result.album?.images?.[0]?.url,
      date: result.album.release_date,
      album_tracks: albumTracks,
      artist_graphic: artistGraphic
    };
    await client.set(elementID, JSON.stringify(trackObject));
    res.json(trackObject);
  } else if (elementType == "artists") {
    let artistObject = {
      name: result.name,
      popularity: result.popularity,
      artists: "",
      image: result.images?.[0].url,
      date: "",
      album_tracks: [],
      artist_graphic: result.images?.[0].url
    };
    await client.set(elementID, JSON.stringify(artistObject));
    res.json(artistObject);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
