import "./Post.css";

export default function Post({ title, description }) {
  return (
    <>
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
          <p className="post-title"> {title} </p>
          <p className="post-description">{description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
