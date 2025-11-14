// import Interprete from "./components/Interprete";
import Interprete from "./components/InterpreteAccesible";
import peliculas from "./data/peliculas";

import Contenedor from "./components/Grid.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Interpretes from "./pages/Interpretes.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route element={<Contenedor />} />
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Interpretes" element={<Interpretes />} />
          {/* <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/admin" element={<Admin />} /> */}
          <Route />

          <Route
            path="*"
            element={
              <Contenedor titulo="Pagina no encontrada">
                <p> La ruta no existe.</p>
              </Contenedor>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
/*
// import Interprete from "./components/Interprete";
import Interprete from "./components/InterpreteAccesible";
import peliculas from "./data/peliculas";

import Contenedor from "./components/Grid.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
    <Header />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Contenedor />}>
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/Interpretes" element={<Interpretes />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      </main>
    </>
  );
}

export default App;
*/
