import { Link } from "react-router-dom";

function DescktopNav() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Peliculas" className="navbar__link">
            Películas
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Interpretes" className="navbar__link">
            Intérpretes
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/admin" className="navbar__link">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DescktopNav;
