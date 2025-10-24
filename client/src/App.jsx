
import './App.css';
import BlackBackground from './components/BlackBackground';
import ArtistGraphic from './components/ArtistGraphic';
import ArticlePage from './components/ArticlePage';
import NavBar from './components/NavBar';
import { supabase } from './supabaseClient.js';
import { Auth } from '@supabase/auth-ui-react'

function App() {

  return (
    <>
      {/* album page */}
      {/* <div style={{ position: "relative", height: "75px" }}>
        <BlackBackground width="95%" height="40px" opacity="0.85" marginTop="1px"/>
      </div>
      <div style={{ position: "relative" }}>
        <ArtistGraphic> </ArtistGraphic>
      </div> */}
      {/* <ArtistGraphic> </ArtistGraphic> */}
      <ArticlePage> </ArticlePage>

      {/* authentication: https://supabase.com/docs/guides/auth/quickstarts/react */}
    </>
  )
}

export default App

