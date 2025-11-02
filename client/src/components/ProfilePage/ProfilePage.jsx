import "./ProfilePage.css";
import "../BlackBackground";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";

export default function ProfilePage() {
  return (
    <ContentHolder
      margin="40px auto"
      width="60%"
      height="250px"
      flexCenter={false}
    >
      <BlackBackground layerBlur="7px" borderRadius="2px" />
      <div class="profile-page-holder">
        <div>
          <img
            class="profile-page-picture"
            src="/pictures/itsbritneybitch.webp"
          />
        </div>
        <div>
          <p> kdot </p>
          <p> makin music like a g</p>
        </div>
        <div>
          <p> 25 films reviewed </p>
          <p> 450 albums listened </p>
        </div>
      </div>
    </ContentHolder>
  );
}
