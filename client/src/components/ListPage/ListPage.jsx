import "./ListPage.css";
import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";
import HomePageElement from "../HomePageElement";

export default function ListPage() {
  return (
    <>
      <ContentHolder margin="30px auto 30px auto" width="70%" height="60px">
        <BlackBackground />
        <p id="intro-message">
          welcome back <b> jonathanyu1825</b>! here's what's been up in music{" "}
        </p>
      </ContentHolder>
      <div className="hp-holder">
        <ContentHolder
          flexCenter={false}
          margin="0px 0px 0px 50px"
          width="870px"
          height="790px"
        >
          <BlackBackground layerBlur="5px" />
          <p className="hp-title" id="your-friends-reviewed">
            your friends reviewed
          </p>
          <div className="hp-element-holder">
            <HomePageElement imageURL="/pictures/chanelorange.jpg"></HomePageElement>
            <HomePageElement imageURL="/pictures/abbeyroad.jpg"></HomePageElement>
            <HomePageElement imageURL="/pictures/bad.png"> </HomePageElement>
            <HomePageElement imageURL="/pictures/ballads1.png"></HomePageElement>
          </div>
          <div className="hp-element-holder">
            <HomePageElement imageURL="/pictures/darksideofthemoon.png"></HomePageElement>
            <HomePageElement imageURL="/pictures/dawnfm.png"> </HomePageElement>
            <HomePageElement imageURL="/pictures/eminem.jpeg"></HomePageElement>
            <HomePageElement imageURL="/pictures/eminem.jpeg"></HomePageElement>
          </div>
        </ContentHolder>
        <ContentHolder
          flexCenter={false}
          margin="0px 50px 0px 0px"
          width="410px"
        >
          <BlackBackground layerBlur="5px" />
          <div id="hp-featured-album">
            <p className="hp-title"> Featured Album </p>
            <img
              class="hp-article-picture"
              src="./pictures/lifeofashowgirl.png"
            />
          </div>
          <p className="hp-article-content">
            Taylor Swift has once again reinvented herself with her highly
            anticipated album, The Life of a Showgirl. Departing from her
            signature country-pop roots, this record immerses listeners in the
            glittering yet gritty world of a performer on stage, weaving stories
            of ambition, heartbreak, and the pursuit of fame. From the opening
            track, Velvet Curtains, Swift sets the scene: the rush of applause,
            the thrill of the lights, and the loneliness behind the glamor. Each
            song captures a different facet of a showgirl’s          <b>Show More...</b>
          </p>
        </ContentHolder>
      </div>
    </>
  );
}
