import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import HomePageElement from "../HomePageElement";
import "./HomePageUser.css";

export default function HomePageUser({ user }) {

  const username = user.email.split("@")[0];

  return (
    <ContentHolder
      width="85%"
      height="100%"
      margin="25px auto"
      flexCenter={false}
    >
      <BlackBackground
        width="108%"
        height="110%"
        layerBlur="10px"
        borderRadius="25px"
        opacity="0.87"
        color="#000000ff"
      />
      <div id="home-page-welcome">
        <h1 class="welcome-message">
          {" "}
          welcome back <b>{username}</b>! here's what's been up in music.{" "}
        </h1>
      </div>
      <h1 class="home-page-title"> Your Friends Reviewed </h1>
      <div class="home-page-elements">
        <HomePageElement imageURL="/pictures/chanelorange.jpg">
          {" "}
        </HomePageElement>
        <HomePageElement imageURL="/pictures/abbeyroad.jpg"> </HomePageElement>
        <HomePageElement imageURL="/pictures/bad.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/ballads1.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/darksideofthemoon.png">
          {" "}
        </HomePageElement>
        <HomePageElement imageURL="/pictures/dawnfm.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/eminem.jpeg"> </HomePageElement>
      </div>

      {/* <div class="vertical-line"> </div> */}
      <div class="home-page-article">
        <BlackBackground
          //   color="#383838"
          color="#306128ff"
          width="103%"
          height="109%"
          layerBlur="5px"
          opacity="0.5"
        >
          {" "}
        </BlackBackground>
        <img
          class="home-page-article-picture"
          src="./pictures/lifeofashowgirl.png"
        />
        <div class="home-page-article-content">
          <h1 class="home-page-article-title">
            Featured Album - Life of a Showgirl
          </h1>
          <p class="home-page-article-subtitle">
            {" "}
            Taylor Swift has once again reinvented herself with her highly
            anticipated album, The Life of a Showgirl. Departing from her
            signature country-pop roots, this record immerses listeners in the
            glittering yet gritty world of a performer on stage, weaving stories
            of ambition, heartbreak, and the pursuit of fame. From the opening
            track, Velvet Curtains, Swift sets the scene: the rush of applause,
            the thrill of the lights, and the loneliness behind the glamor. Each
            song captures a different facet of a showgirl’s life — the
            exhilarating highs, the exhausting rehearsals, and the bittersweet
            moments of reflection after the crowd has gone home. ChatGPT said:
            With lush production and cinematic storytelling, The Life of a
            Showgirl feels like a Broadway musical filtered through Swift’s
            introspective lens. Her lyricism shines as she blurs the line
            between persona and performer, inviting listeners to question.{" "}
          </p>
        </div>
      </div>
      <h1 class="home-page-title"> Your Friends Listening To...</h1>
      <div class="home-page-elements">
        <HomePageElement imageURL="/pictures/chanelorange.jpg">
          {" "}
        </HomePageElement>
        <HomePageElement imageURL="/pictures/abbeyroad.jpg"> </HomePageElement>
        <HomePageElement imageURL="/pictures/bad.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/ballads1.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/darksideofthemoon.png">
          {" "}
        </HomePageElement>
        <HomePageElement imageURL="/pictures/dawnfm.png"> </HomePageElement>
        <HomePageElement imageURL="/pictures/eminem.jpeg"> </HomePageElement>
      </div>
      <div id="popular-content-div">
        <div class="popular-content">
          <h1 class="popular-content-header"> Popular Brackets </h1>
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
        </div>
        <div class="vertical-line"> </div>
        <div class="popular-content">
          <h1 class="popular-content-header"> Popular Mount Rushmores </h1>
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
          <img
            class="popular-content-image"
            src="/pictures/mountrushmore2010.jpg"
          />
        </div>
      </div>
    </ContentHolder>
  );
}
