import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";

export default function InterpreteDescription() {
  const { peli, index } = useParams();
  const navigate = useNavigate();

  // Buscar la película por ID
  const pelicula = peliculas.find((p) => p.id === parseInt(peli));

  // Buscar el actor por índice
  const actor = pelicula?.actores[parseInt(index)];

  return (
    <main className="interprete-container">
      
      {/* Volver */}
      <button
        onClick={() => navigate("-1")}
        className="interprete-btn-volver"
      >
        Volver
      </button>

      
      <div className="interprete-card">
        {/* Imagen del intérprete */}
        <figure className="interprete-image">
          <img
            src={actor.imagen}
            alt={`Foto de ${actor.nombre}`}
            loading="lazy"
          />
        </figure>

        {/* Información del intérprete */}
        <div className="interprete-info">
          <h1 className="interprete-nombre">{actor.nombre}</h1>
          {actor.fechaNacimiento && (
            <p className="interprete-birth">
              <strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}
            </p>
          )}
          <p className="interprete-biografia">{actor.biografia}</p>
        </div>
      </div>
    </main>
  );
}
