import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="post-profile">
        <img
          className="post-profile-image"
          src="/pictures/itsbritneybitch.webp"
        />
        <p className="post-profile-title">
          <b>itsbritneybitch</b>
        </p>
      </div>
      <div className="post-details">
        <p className="post-title"> Drake's best album. </p>
        <p className="post-description">
          There's not a single song on this album that isn't a banger except for
          brutal. Literally EVERY SINGLE SONG is a banger. I don't know what OR
          was doing during the quarantine, but she was absolutely cooking on the
          piano.
        </p>
      </div>
    </div>
  );
}
