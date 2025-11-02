import "./App.css";
import NavBar from "./components/NavBar";
import { supabase } from "./supabaseClient.js";
import { Auth } from "@supabase/auth-ui-react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import SearchResultsPage from "./components/SearchResultsPage";
import CreatePage from "./components/CreatePage/index.js";
import HomePageUser from "./components/HomePageUser";
import AlbumInfo from "./components/AlbumInfo";
import ArticleHomePage from "./components/ArticleHomePage";
import React, { useState, useEffect } from "react";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";

export default function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Routes>
        <Route path="/:elementType/:elementID" element={<AlbumInfo />} />
        <Route
          path="/"
          element={session ? <HomePageUser user={user} /> : <HomePage />}
        />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/home" element={<HomePageUser user={user} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/search/:query" element={<SearchResultsPage />} />
        <Route path="/articles" element={<ArticleHomePage />} />
        <Route path="/profile/:profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
