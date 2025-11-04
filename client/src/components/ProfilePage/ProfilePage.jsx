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
      <div className="profile-page-holder">
        <div className="profile-page-picture-holder">
          <img
            className="profile-page-picture"
            src="/pictures/itsbritneybitch.webp"
          />
        </div>
        <div className="profile-information">
          <p className="profile-username"> jj </p>
          <p className="profile-description"> makin music like a g</p>
        </div>
        <div className="profile-statistics">
          <p className = "number-albums-reviewed"> 25 albums reviewed </p>
          <p className="number-tracks-reviewed"> 450 tracks listened </p>
        </div>
      </div>
    </ContentHolder>
  );
}
