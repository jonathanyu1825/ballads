import "./HomePageElement.css";
import { Link } from "react-router";

export default function HomePageElement({ imageURL }) {
  return (
    <a href="https://www.ballads.live">
      <div class="home-page-element">
        <div class="element-user">
          <img
            class="replace-with-profile"
            src="./pictures/itsbritneybitch.webp"
          />
          <p class="element-username"> britney </p>
        </div>
        <div class="element-image-div">
          <img class="element-image" src={imageURL} />
        </div>
        <p class="element-name"> TierMaker </p>
      </div>
    </a>
  );
}
