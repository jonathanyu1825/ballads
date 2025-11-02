import "./SearchResult.css";
import { Link } from "react-router";
export default function SearchResult({
  resultID,
  resultName,
  imageURL,
  subtitle,
  resultType
}) {
  // pseudocode:

  // if id in database
  //   return link/name
  // else
  //   return link/id

  return (
    <Link to={`/${resultType}/${encodeURIComponent(resultID)}`}>
      <div className="search-result">
        <div className = "search-result-image-holder">
          <img className="search-result-image" src={imageURL} />
        </div>
        <div className="search-result-info">
          <h1 className="search-result-title"> {resultName} </h1>
          <p className="search-result-subtitle"> {subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
