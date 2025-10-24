import "./NavBar.css";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import ProfileIcon from "../ProfileIcon";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <>
      <ContentHolder width="95%" height="40px" margin="2px auto">
        <BlackBackground layerBlur="4px" opacity="0.7"></BlackBackground>
        <div className="nav-content">
          <div className="left-side-nav-content">
            <Link to="/home">
              <img id="nav-logo" src="/logo.png" />
            </Link>
            <SearchBar> </SearchBar>
          </div>
          <div className="right-side-nav-content">
            <ProfileIcon />
          </div>
        </div>
      </ContentHolder>
    </>
  );
}
