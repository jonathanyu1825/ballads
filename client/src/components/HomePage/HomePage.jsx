import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";
import "./HomePage.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <ContentHolder
      width="90%"
      height="600px"
      margin="50px auto"
      flexCenter={true}
      padding="0px"
    >
      <BlackBackground
        width="100%"
        height="100%"
        opacity="0.8"
        layerBlur="20px"
        borderRadius="50px"
      />
      {/* use grid

        wrap elements in column 

      */}
      <div id="grid">
        <div id="col1">
          <img
            class="home-page-album-cover"
            src="./pictures/somenights.png"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/ballads1.png"
          ></img>
          <img class="home-page-album-cover" src="./pictures/mbdtf.jpg"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/lemonade.png"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/somenights.png"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/ballads1.png"
          ></img>
          <img class="home-page-album-cover" src="./pictures/mbdtf.jpg"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/lemonade.png"
          ></img>
        </div>
        <div id="col2">
          <img
            class="home-page-album-cover"
            src="./pictures/abbeyroad.jpg"
          ></img>
          <img class="home-page-album-cover" src="./pictures/bad.png"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/songsinthekeyoflife.jpg"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/highway61.jpg"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/abbeyroad.jpg"
          ></img>
          <img class="home-page-album-cover" src="./pictures/bad.png"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/songsinthekeyoflife.jpg"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/highway61.jpg"
          ></img>
        </div>
        <div id="col3">
          <img
            class="home-page-album-cover"
            src="./pictures/chanelorange.jpg"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/topimpabutterfly.png"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/swimming.png"
          ></img>
          <img class="home-page-album-cover" src="./pictures/dawnfm.png"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/chanelorange.jpg"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/topimpabutterfly.png"
          ></img>
          <img
            class="home-page-album-cover"
            src="./pictures/swimming.png"
          ></img>
          <img class="home-page-album-cover" src="./pictures/dawnfm.png"></img>
        </div>
        <div id="col4">
          <img class="home-page-album-cover" src="./pictures/eminem.jpeg"></img>

          <img class="home-page-album-cover" src="./pictures/sour.png"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/illuminate.jpg"
          ></img>
          <img class="home-page-album-cover" src="./pictures/thefame.png"></img>
          <img class="home-page-album-cover" src="./pictures/eminem.jpeg"></img>

          <img class="home-page-album-cover" src="./pictures/sour.png"></img>
          <img
            class="home-page-album-cover"
            src="./pictures/illuminate.jpg"
          ></img>
          <img class="home-page-album-cover" src="./pictures/thefame.png"></img>
        </div>
      </div>

      <div class="home-page">
        <h1 id="title">
          {" "}
          <img id="logo" src="/logo.png" />
          Ballads{" "}
        </h1>
        {/* <p id="subtitle"> your life. your music. </p> */}
        <p id="subtitle"> your life. your music. </p>
        <div id="home-page-buttons">
          <div id="signup">
              <div class="home-page-button" id="sign-up-btn">
                {" "}
              </div>
              <p id="signup-msg"> Sign up </p>
          </div>
          <div id="subscribe">
            <div class="home-page-button" id="subscribe-btn">
              {" "}
            </div>
            <p id="subscribe-msg"> Subscribe </p>
          </div>
        </div>
      </div>
    </ContentHolder>
  );
}
