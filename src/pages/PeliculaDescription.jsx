import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";

export default function PeliculaDescription() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  return (
    <main className="pelicula-container">
      {/* Volver */}
      <button onClick={() => navigate("-1")} className="pelicula-btn-volver">
        Volver
      </button>

      {/* Descripcion de la película */}
      <article className="pelicula-card-detail">
        <figure>
          <img src={pelicula.cartelera} alt={pelicula.nombre} />
        </figure>
        <section className="pelicula-info">
          <h1 className="pelicula-nombre">{pelicula.nombre}</h1>
          <div className="pelicula-director">
            <strong>Director:</strong> {pelicula.director}
          </div>
          <div className="pelicula-clasificacion">
            <strong>Clasificación:</strong> {pelicula.clasificacion}
          </div>
          <div className="pelicula-recaudacion">
            <strong>Recaudación:</strong> ${pelicula.recaudacion}
          </div>
          <div className="pelicula-nota">
            <strong>Calificación:</strong> {pelicula.nota}/10
          </div>
          <p className="pelicula-resumen">{pelicula.resumen}</p>
        </section>
      </article>
    </main>
  );
}
