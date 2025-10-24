import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ArtistGraphic from "./components/ArtistGraphic/ArtistGraphic.jsx";
import SignUpPage from "./components/SignUpPage/SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/album/:albumName" element={<ArtistGraphic />} />
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/home" element={<UserHomePage />} /> */}
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);
