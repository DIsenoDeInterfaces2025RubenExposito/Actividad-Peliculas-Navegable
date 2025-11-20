import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BurgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="burger-nav-container">
      {/* Botón hamburguesa */}
      {/* <button onClick={() => setOpen(!open)}> ☰ </button> */}
      <button className="burger-btn" onClick={() => setOpen(!open)}>
        <span className="burger-icon">{open ? "✕" : "☰"}</span>
      </button>

      {/* Menú controlado por el estado */}
      <nav className={`burger-menu ${open ? "burger-menu--open" : ""}`}>
        <NavLink to="/" className="burger-link" onClick={() => setOpen(false)}>
          Inicio
        </NavLink>
        <NavLink
          to="/peliculas"
          className="burger-link"
          onClick={() => setOpen(false)}
        >
          Películas
        </NavLink>
        <NavLink
          to="/interpretes"
          className="burger-link"
          onClick={() => setOpen(false)}
        >
          Intérpretes
        </NavLink>
      </nav>
    </div>
  );
}
