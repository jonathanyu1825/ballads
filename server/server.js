import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://pwxpfvlzhcdkxakbqzig.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);
// https://supabase.com/dashboard/project/pwxpfvlzhcdkxakbqzig/settings/api-keys
// const { data, error } = await supabase.from("songs").select();


const clientID = "bc152b06b1154fa7971dddbfb0307c21";
const clientSecret = "8c915fb2b394463aacda06509bfa04f5";
let accessToken = null;
const expirationDate = 0;

async function getSpotifyToken(clientID, clientSecret) {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientID,
        client_secret: clientSecret
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
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
    console.log("hi 3");
    accessToken = await getSpotifyToken(clientID, clientSecret);
  }
}

async function searchSpotify(query) {
  await updateToken();
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/search",
      {
        headers: { Authorization: `Bearer ${accessToken}`},
        params: {
          q: query,
          type: "album",
          limit: 10
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("error searching spotify");
    return null;
  }
}

app.get("/api/search/:query", async (req, res) => {
  const searchQuery = req.params.query;
  const results = await searchSpotify(searchQuery);
  console.log(results);
  res.json(results);
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
