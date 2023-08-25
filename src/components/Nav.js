import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <ul>Home</ul>
      </Link>
      <Link to="/Search">
        <ul>Search</ul>
      </Link>
      <Link to="/About">
        <ul>About</ul>
      </Link>
    </div>
  );
}
