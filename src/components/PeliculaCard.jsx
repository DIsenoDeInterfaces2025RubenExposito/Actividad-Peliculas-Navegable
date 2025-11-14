export default function PeliculaCard({ pelicula }) {
  return (
    <article className="pelicula-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <figure className="w-full h-64 overflow-hidden bg-gray-200">
        <img
          src={pelicula.cartelera}
          alt={`Cartel de ${pelicula.nombre}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </figure>
      <div className="p-4">
        <header>
        <h2 className="text-xl font-bold text-colorprimary mb-2">
          {pelicula.nombre}
        </h2>
        </header>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Director:</strong> {pelicula.director}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Clasificación:</strong> {pelicula.clasificacion}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Recaudación:</strong> {pelicula.recaudacion}
        </p>
        <p className="flex items-center mb-3">
           {pelicula.nota}/10
          
        </p>
        <p className="text-sm text-gray-700">{pelicula.resumen}</p>
      </div>
    </article>
  );
}
