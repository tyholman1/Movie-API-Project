import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/Dashboard">
        <div>Search Results</div>
      </Link>
      <Link to="/About">
        <div>ABOUT</div>
      </Link>
    </div>
  );
}
