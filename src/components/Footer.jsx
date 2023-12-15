import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import tmdb from "../img/tmdb.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tmdb_footer">
        <p>Dados fornecidos por TMDb</p>
        <p>The Movie Database</p>
        <Link to="https://www.themoviedb.org/?language=pt" target="_blank"><img src={tmdb} alt="tmdb" /></Link> 
      </div>
      <div>
        <p className="thiago">
          Criado por <span>Thiago Alves</span>
        </p>
        <ul className="social_list">
          <li>
            <Link to="https://github.com/Thiago87dev" target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/thiago-alves-010915274/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
          <Link
              to="https://www.instagram.com/thiagopaulista87/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
