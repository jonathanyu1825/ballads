import ArtistGraphic from "../ArtistGraphic";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import "./AlbumInfo.css";
import Post from "../Post";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../../supabaseClient.js";

export default function AlbumInfo() {
  const { elementType, elementID } = useParams();
  const [albumName, setAlbumName] = useState("");
  const [albumTracks, setAlbumTracks] = useState([]);
  const [albumDate, setAlbumDate] = useState("");
  const [albumScore, setAlbumScore] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [albumArtist, setAlbumArtist] = useState("");

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const [showLog, setShowLog] = useState(false);

  useEffect(() => {
    const url = `http://localhost:3000/api/get/${elementType}/${encodeURIComponent(
      elementID
    )}`;

    const fetchAlbum = async () => {
      try {
        const response = await fetch(url);
        console.log("hi")
        const data = await response.json();

        console.log(data);

        setAlbumImage(data.image);
        setAlbumName(data.name);
        setAlbumScore(data.popularity);

        setAlbumArtist(data.artists);
        setAlbumDate(data.date);

        setAlbumTracks(data.album_tracks);
      } catch {
        console.error("error");
      }
    };

    fetchAlbum();
  }, [elementType, elementID]);

  useEffect(() => {}, [albumImage]);

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 210;
      if (window.scrollY > triggerPoint) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function postReview() {
    const { data: { user } } = await supabase.auth.getUser();

    console.log(user.id);
    console.log(title);
    console.log(review);
    console.log(elementID);

    const { error } = await supabase.from("reviews").insert({ 
      user_id: user.id,
      review_title: title,
      review_description: review,
      element_id: elementID
    });

    if (error) {
      console.log(error);
    }

    alert("hi");
  }

  return (
    <>
      <ArtistGraphic graphicURL="/videos/oliviarodrigo.mp4" />
      <div className="album-content-holder">
        <div className={`album-info ${isFixed ? "fixed" : "relative"}`}>
          <BlackBackground
            width="100%"
            height="100%"
            layerBlur="5px"
            opacity="0.8"
          />
          <img className="album-cover" src={albumImage} />
          <h1 className="album-name"> {albumName} </h1>
          <h1 className="album-artist"> {albumArtist} </h1>
          <div className="album-date">
            <p> {albumDate} </p>
            <p> {albumScore} </p>
          </div>
          <div className="album-songs">
            {albumTracks.map((track, index) => (
              <p> {index + 1 + ". " + track} </p>
            ))}
          </div>
        </div>
        <div className={`album-reviews ${isFixed ? "stick" : ""}`}>
          <BlackBackground width="100%" layerBlur="5px" />
          <div className="log-holder">
            <button id="my-list-button">
              <b>My List +</b>
            </button>
            <button
              id="log-button"
              onClick={() => {
                setShowLog(!showLog);
              }}
            >
              <b> Log + </b>
            </button>
          </div>
          {showLog ? (
            <div className="create-post">
              <div className="create-post-profile">
                <img
                  className="create-post-profile-image"
                  src="/pictures/itsbritneybitch.webp"
                />
                <p className="create-post-profile-title">
                  <b>itsbritneybitch</b>
                </p>
              </div>
              <textarea
                onChange = {(e) => setTitle(e.target.value)}
                className="create-post-title"
                placeholder="create a post"
              ></textarea>
              <textarea
              onChange = {(e) => setReview(e.target.value)}
                className="create-post-content"
                placeholder="create a review"
              ></textarea>
              <div className="create-post-button-holder">
                <button onClick = {() => postReview()} className="create-post-button"> Post </button>
              </div>
            </div>
          ) : (
            <div> </div>
          )}

          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
