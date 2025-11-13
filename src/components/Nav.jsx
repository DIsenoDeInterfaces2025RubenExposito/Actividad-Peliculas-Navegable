import { Link } from 'react-router-dom'

function Nav() {
return (
<nav>
    <Link to="/">Inicio</Link>
    <Link to="/Peliculas">Películas</Link>
    <Link to="/Interpretes">Intérpretes</Link>
    <Link to="/admin">Admin</Link>
</nav>
)}

export default Nav;