import Contenedor from "./components/Grid.jsx";
// import Interprete from "./components/Interprete";
import Interprete from "./components/InterpreteAccesible";
import peliculas from "./data/peliculas";

function App() {
  return (
    <Header>
      
      <Routes>
        <Route element={<Contenedor />}>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/Interpretes" element={<Interpretes />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>

     
    </Header>
  );
}

export default App;
