import "./ArtistGraphic.css";
import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";

export default function ArtistGraphic({ image }) {
  return (
    <ContentHolder width="90%" height="300px" margin="25px auto">
      <BlackBackground width="88%" height="93%" opacity="0.5" />
      <video className = "artistGraphic" autoPlay muted loop> 
        <source src="/videos/kendricklamar.mp4" type="video/mp4" />
        Video can't be played. 
      </video>
    </ContentHolder>
  );
}
