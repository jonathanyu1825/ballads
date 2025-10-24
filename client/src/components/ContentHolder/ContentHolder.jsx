import "./ContentHolder.css";

export default function ContentHolder({ width, height, margin = "2px auto", padding = "0px", flexCenter = true, children }) {
  return (
    <div
      className="content-holder"
      style={{
        "--content-width": width,
        "--content-height": height,
        "--content-margin": margin,
        "--content-padding": padding,
        "display": flexCenter ? "flex": "block",
        "alignItems": flexCenter ? "center" : undefined,
        "justifyContent": flexCenter ? "center" : undefined
      }}
    >
      {children}
    </div>
  );
}
