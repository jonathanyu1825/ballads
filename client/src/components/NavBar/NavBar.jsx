import "./NavBar.css";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import ProfileIcon from "../ProfileIcon";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import NavLink from "../NavLink";
import { useState } from "react";
import { supabase } from "../../supabaseClient.js";

export default function NavBar({ user }) {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("error signing out");
    } else {
      console.log("logged out successfully");
    }
  };
  return (
    <>
      <ContentHolder width="95%" height="40px" margin="2px auto">
        <BlackBackground layerBlur="4px" opacity="0.7"></BlackBackground>
        <div className="nav-content">
          <div className="left-side-nav-content">
            <Link to="/">
              <img id="nav-logo" src="/logo.png" />
            </Link>
            <SearchBar> </SearchBar>
          </div>
          <div className="right-side-nav-content">
            {showLogin ? (
              <>
                <img
                  id="close-login"
                  src="/pictures/x-button.png"
                  onClick={() => {
                    setShowLogin(false);
                  }}
                />
                <p> username: </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-field"
                  id="login-username"
                />
                <p> password: </p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-field"
                  id="login-password"
                />
                <button id="submit-login" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            ) : (
              <>
                <Link to="/articles">
                  <NavLink linkName="articles"> </NavLink>
                </Link>
                <Link to="/create">
                  <NavLink linkName="creators"> </NavLink>
                </Link>
                <Link to="/lists">
                  <NavLink linkName="lists"> </NavLink>
                </Link>
                {user ? (
                  <div className="profile-div">
                    <ProfileIcon
                      user={user}
                      onClick={() => {
                        setShowProfile(!showProfile);
                      }}
                    />

                    {showProfile ? (
                      <div className="profile-overlay">
                        <BlackBackground
                          layerBlur="2px"
                          borderRadius="15px"
                          color="#464646"
                        />
                        <div id="profile-content">
                          <Link to="/profile/jtqbr">
                            <div className="profile-option">
                              <div className="nav-image-holder">
                                <img
                                  id="profile-image"
                                  src="/pictures/profile icon.png"
                                />
                              </div>
                              <p> profile </p>
                            </div>
                          </Link>
                          <div
                            className="profile-option"
                          >
                            <div className="nav-image-holder">
                              <img
                                id="profile-image"
                                src="/pictures/settings icon.png"
                              />
                            </div>
                            <p> settings </p>
                          </div>
                          <div onClick={handleLogout} className="profile-option">
                            <p> Logout </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div> </div>
                    )}
                  </div>
                ) : (
                  <div onClick={() => setShowLogin(true)}>
                    <NavLink linkName="login"></NavLink>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </ContentHolder>
    </>
  );
}
