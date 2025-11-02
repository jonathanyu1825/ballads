import "./SearchBar.css";
import { useNavigate } from "react-router"

export default function SearchBar() {

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      const encodedQuery = encodeURIComponent(query);
      navigate(`/search/${encodedQuery}`);
    }
  };

  return <input id="search-bar" onKeyDown={handleKeyDown}/>;
}
