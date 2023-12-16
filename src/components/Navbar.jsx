import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/react_bestMovies">
          <BiCameraMovie />
          Best movies
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
