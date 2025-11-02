import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";
import "./SignUpPage.css";
import { supabase } from "../../supabaseClient.js";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        username: username
      }
    });
  };
  return (
    <ContentHolder
      width="50%"
      height="600px"
      margin="45px auto"
      flexCenter={false}
    >
      <BlackBackground />
      <div id="signup-page">
        <h1 id="signup-title"> Sign Up </h1>
        <hr id="signup-hr" />
        <div id="third-party-signup">
          <div id="spotify-login" class="third-party-auth">
            <img
              class="third-party-logo"
              src="/pictures/third_party_logos/spotify_logo.webp"
            />
            <p class="third-party-name"> Spotify </p>
          </div>
          <div id="google-login" class="third-party-auth">
            <img
              class="third-party-logo"
              src="/pictures/third_party_logos/google_logo.webp"
            />
            <p class="third-party-name"> Google </p>
          </div>
          <div id="apple-login" class="third-party-auth">
            <img
              class="third-party-logo"
              src="/pictures/third_party_logos/apple_logo.png"
            />
            <p class="third-party-name"> Apple </p>
          </div>
          <div id="microsoft-login" class="third-party-auth">
            <img
              class="third-party-logo"
              src="/pictures/third_party_logos/microsoft_logo.png"
            />
            <p class="third-party-name"> Microsoft </p>
          </div>
        </div>
        <p> or </p>
        <form id="signup-form" onSubmit={handleSignUp}>
          <label class="form-label"> email </label>
          <input
            class="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label"> username </label>
          <input
            class="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label class="form-label"> password </label>
          <input
            class="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submit"> Sign Up </button>
        </form>
      </div>
    </ContentHolder>
  );
}
