import "./ArtistGraphic.css";
import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";

export default function ArtistGraphic({ graphicURL }) {
  return (
    <ContentHolder width="95%" height="300px" margin="25px auto">
      <BlackBackground width="93%" height="93%" opacity="0.5" />
      <video className = "artistGraphic" autoPlay muted loop> 
        <source src={graphicURL} type="video/mp4" />
        Video can't be played. 
      </video>
    </ContentHolder>
  );
}
