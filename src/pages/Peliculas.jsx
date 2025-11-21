import peliculas from "../data/peliculas";
import Contenedor from "../components/Grid.jsx";
import PeliculaCard from "../components/PeliculaCard.jsx";
import { Link } from "react-router-dom";

export default function Peliculas() {
  return (
    <Contenedor titulo="Películas destacadas">
      <p className="body-text">Catálogo de películas disponibles:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/Peliculas/${pelicula.id}`}>
            <PeliculaCard pelicula={pelicula} />
          </Link>
        ))}
      </div>
    </Contenedor>
  );
}

/*
import peliculas from "../data/peliculas";

function Peliculas() {
  return (
    <>
      <Contenedor titulo="Intérpretes de películas destacadas">
        <p className="body-text">Listado de intérpretes disponibles:</p>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas.map((pelicula) =>
              }
        </main>
      </Contenedor>
    </>
  );
}
export default Peliculas;
*/