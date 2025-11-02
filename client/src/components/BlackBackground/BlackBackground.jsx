import "./BlackBackground.css";

export default function BlackBackground({
  width = "100%",
  height = "100%",
  opacity = "1",
  marginTop = "0px",
  layerBlur = "3px",
  borderRadius = "25px",
  color = "black"
}) {
  return (
    <div
      className="black-background"
      style={{
        "--background-width": width,
        "--background-height": height,
        "--opacity": opacity,
        "--margin-top": marginTop,
        "--layer-blur": layerBlur,
        "--border-radius": borderRadius,
        "--color": color,
      }}
    ></div>
  );
}
