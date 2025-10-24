import BlackBackground from "../BlackBackground";
import './ArticlePage.css';
import ContentHolder from "../ContentHolder";
export default function Article() {
  return (
    <>
      {/* <div style={{ position: "relative", height: "75px" }}>
        <BlackBackground
          width="95%"
          height="40px"
          opacity="0.85"
          marginTop="1px"
        />
      </div> */}
      <ContentHolder width = "60%" height = "100%" margin = "25px auto" flexCenter = {false}>
        <BlackBackground width = "100%" height = "105%" opacity = "0.8" layerBlur="4px"/>
        <div id = "article-content">
        <h1> October 18th - 9:15 PM </h1>
        <p>
          Welcome to Ballads. This is a site I’m making partly as a side thing, 
          partly because I was watching a ton of NFR podcast for a good 2 months, 
          and I realized there was no Letterboxd equivalent for music.
          <br />
          <br />
          Here are some issues I was having.
          <br />
          <br />
          If you are very interested in listening to albums, where do you log 
          which albums you listened to? What if you want to share your thoughts 
          with your 2 random friends who don’t care what you have to say?
          <br />
          <br />
          The other day, I was listening to an album by a rather controversial 
          figure (you can probably guess who, it rhymes with Panye), and I realized 
          I had already listened to the album. I just completely forgot. But there’s 
          not really a place where you can track these sorts of things.
          <br />
          <br />
          Sites like MusicBoard and Record Club exist, but fuck it, I’m just going to 
          make my own.
          <br />
          <br />
          Also, because I was so influenced by NFR podcast at the time of having this idea, 
          I thought it’d be cool to have some user interactivity features. Maybe where you can 
          play some musical games, etc. This will probably come to fruition under two conditions. 
          One: I finish the main part of the app. Two: I don’t give up after two hours.
          <br />
          <br />
          For the tech stack, I plan on using Supabase, Express, React, and Node. I’ve been working 
          a ton on vanilla JS recently, so this will be my way of learning how frameworks work.
          <br />
          <br />
          If you’ve decided to visit this site, feel free to fuck around. Go on some albums. Comment 
          your thoughts. Hopefully you’ll find a cool album that you’ve never listened to. And then 
          you’ll listen to it, have your world shattered by how good it is, spread the news, and boom, 
          you’re suddenly Jacob Collier.
          <br />
          <br />
          So, yeah…
          <br />
          <br />
          Also, if you’re seeing this article on the home page, then that means the sites not done yet. 
          In the mean time you should listen to my new song: 
          <br />
          <br />
          http://bit.ly/3J3DrtZ
          
        </p>
      </div>
      </ContentHolder>
    </>
  );
}
