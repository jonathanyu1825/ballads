import BlackBackground from "../BlackBackground";
import "./ArticlePage.css";
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
      <ContentHolder
        width="60%"
        height="100%"
        margin="25px auto"
        flexCenter={false}
      >
        <BlackBackground
          width="100%"
          height="105%"
          opacity="0.8"
          layerBlur="4px"
        />
        <div id="article-content">
          <h1> October 18th - 9:15 PM </h1>
          {/* <p>
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
          
        </p> */}

          <p>
            Welcome to ballads.live. It's ballads.live and not ballads.com
            because I there's no way I'm spending two thousand dollars on a
            domain name that I'll probably end up switching anyways. 
            
            <br /> <br />
            Ballads is
            a personal project I'm making for two reasons. For one, I think it'd
            be cool to be able to track the albums you listen to. Most people
            really don't care about this. 
            
            After all, music's greatest gift is
            that you can sit in traffic on the I-95 and not be bored out of your
            mind because the song playing on the radio is really good. But there
            are actually a niche group of people who do enjoy listening to full
            length albums and want to be able to keep track of the stuff they
            listened to. Personally, I enjoy being able to remember the albums I
            listened to because I can look back 3 years and see the type of
            stuff I liked back then. It's also a personal project in a very
            niche space, so it'll be more of a cool thing as opposed to
            something that I'll stick ads on. 
            
            <br /> <br />
            
            Two, I always wanted to learn how
            the tech stack on an app like Letterboxd worked, and this is
            essentially my way of doing that. I plan on using React for the
            frontend, Express and Node for the backend, Postgre for the
            database, Redis for caching, and Supabase for authentication. I'll
            also use Digital Ocean for the server hosting because I'm not trying
            to accidentally rack up a thousand dollar bill on AWS. 
            
            <br /> <br />
            So yeah...if
            you listen to an album and want to share your thoughts in some shape
            or form, go ahead and give it a try.
          </p>
        </div>
      </ContentHolder>
    </>
  );
}
