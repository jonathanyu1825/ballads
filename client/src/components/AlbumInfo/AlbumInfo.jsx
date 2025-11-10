import ArtistGraphic from "../ArtistGraphic";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import "./AlbumInfo.css";
import Post from "../Post";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../../supabaseClient.js";
import { Link } from "react-router";

export default function AlbumInfo() {
  const { elementType, elementID } = useParams();
  const [albumName, setAlbumName] = useState("");
  const [albumTracks, setAlbumTracks] = useState([]);
  const [albumDate, setAlbumDate] = useState("");
  const [albumScore, setAlbumScore] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [albumArtist, setAlbumArtist] = useState("");
  const [artistGraphic, setArtistGraphic] = useState("");

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const [publishedReviews, setPublishedReviews] = useState([]);

  const [showLog, setShowLog] = useState("");

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("element_id", elementID);
      setPublishedReviews(data);
    } catch {
      console.log("sup");
    }
  };

  useEffect(() => {
    const url = `https://api.ballads.live/api/get/${elementType}/${encodeURIComponent(
      elementID
    )}`;
    // const url = `http://localhost:3000/api/get/${elementType}/${encodeURIComponent(
    //   elementID
    // )}`;

    const fetchAlbum = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        setAlbumImage(data.image);
        setAlbumName(data.name);
        setAlbumScore(data.popularity);

        setAlbumArtist(data.artists);
        setAlbumDate(data.date);

        setAlbumTracks(data.album_tracks);
        setArtistGraphic(data.artist_graphic);
      } catch {
        console.error("error");
      }
    };

    fetchAlbum();
    fetchReviews();
  }, [elementType, elementID]);

  useEffect(() => {
    console.log(albumTracks);
  }, [albumTracks]);

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
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("reviews").insert({
      user_id: user.id,
      review_title: title,
      review_description: review,
      element_id: elementID,
    });

    if (error) {
      console.log(error);
    } else {
      setShowLog("posted");
      fetchReviews();
    }
  }

  return (
    <>
      <ArtistGraphic graphicURL={artistGraphic} />
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
            <p id="album-release-date"> {albumDate} </p>
            <p id="popularity-score">
              {" "}
              <img className="popularity-score-logo" src="/logo.png" />{" "}
              {albumScore}%{" "}
            </p>
          </div>
          <div className="tracklist-header">
            <p id="tracklist-header-songs"> Songs </p>
            <p id="tracklist-header-sort">
              {" "}
              <img src="/sortby.png" /> Sort by{" "}
            </p>
          </div>

          <div className="album-songs">
            {albumTracks.map((track, index) => (
              <Link to={`/tracks/${track[1]}`}>
                <b>
                  {" "}
                  <p className= {`track-link ${track[1] === elementID ? "active" : ""}`}>
                    {" "}
                    {index + 1 + ". " + track[0]}{" "}
                  </p>{" "}
                </b>
              </Link>
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
                setShowLog((prev) => (prev === "" ? "showLog" : ""));
              }}
            >
              <b> Log + </b>
            </button>
          </div>

          {/* render based on states:
            - idle
            - show log
            - posted log
          */}
          <div className="create-poste-state-holder">
            {showLog === "" && <></>}

            {showLog === "showLog" && (
              <div className="create-post">
                <div className="create-post-profile">
                  <img
                    className="create-post-profile-image"
                    src="/pictures/itsbritneybitch.webp"
                  />
                  <p className="create-post-profile-title">
                    <b>britneyspears</b>
                  </p>
                </div>
                <textarea
                  onChange={(e) => setTitle(e.target.value)}
                  className="create-post-title"
                  placeholder="create a post"
                ></textarea>
                <textarea
                  onChange={(e) => setReview(e.target.value)}
                  className="create-post-content"
                  placeholder="create a review"
                ></textarea>
                <div className="create-post-button-holder">
                  <button
                    onClick={() => postReview()}
                    className="create-post-button"
                  >
                    {" "}
                    Post{" "}
                  </button>
                </div>
              </div>
            )}

            {showLog === "posted" && (
              <div className="create-post">
                <div className="create-post-profile">
                  <img
                    className="create-post-profile-image"
                    src="/pictures/itsbritneybitch.webp"
                  />
                  <p className="create-post-profile-title">
                    <b>britneyspears</b>
                  </p>
                </div>
                <h1> success </h1>
              </div>
            )}
          </div>
          {publishedReviews.map((publishedReview) => (
            <Post
              title={publishedReview.review_title}
              description={publishedReview.review_description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
