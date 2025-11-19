// Nav.jsx

// Asegúrate de que tu archivo se llame 'DesktopNav.jsx' o ajusta la importación.
import DesktopNav from './DescktopNav'; 
import BurgerNav from './BurgerNav'; 
import useScreenSize from './useScreenSize'; // El hook que determina si estamos en móvil

function Nav() {
  const isMobile = useScreenSize(768); // Usamos 768px como el punto de quiebre

  return (
    // Renderizado condicional
    <nav>
      {isMobile ? <BurgerNav /> : <DesktopNav />}
    </nav>
  );
}

export default Nav;