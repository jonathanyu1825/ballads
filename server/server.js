import dotenv from "dotenv";
dotenv.config();

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pwxpfvlzhcdkxakbqzig.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// // https://supabase.com/dashboard/project/pwxpfvlzhcdkxakbqzig/settings/api-keys

import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

const { data, error } = await supabase.from("songs").select();

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
