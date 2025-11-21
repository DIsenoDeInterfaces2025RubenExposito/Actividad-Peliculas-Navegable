import Contenedor from "../components/Grid.jsx";
import Interprete from "../components/Interprete.jsx";
import peliculas from "../data/peliculas";
import { Link } from "react-router-dom";

export default function Interpretes() {
  return (
    <>
      <Contenedor titulo="Intérpretes de películas destacadas">
        <p className="body-text">Listado de intérpretes disponibles:</p>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
            // .filter(pelicula => pelicula.clasificacion === "Drama") // solo películas de Drama
            .map((pelicula) =>
              pelicula.actores.map((actor, index) => (
                <Link to={`/Interpretes/${pelicula.id}/${index}`} >
                <Interprete
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10} // pasamos si la nota es 10
                >
                  {actor.biografia}
                </Interprete>
                </Link>
              ))
            )}
        </main>
      </Contenedor>
    </>
  )}
  