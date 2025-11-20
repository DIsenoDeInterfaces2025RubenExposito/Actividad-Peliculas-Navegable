import DesktopNav from "./DescktopNav";
import BurgerNav from "./BurgerNav";
import useScreenSize from "../hooks/useScreenSize"; // El hook que determina si estamos en móvil

function Nav() {
  const isMobile = useScreenSize(768);

  return (
    // Eleccion entre Nav de escritorio o Nav hamburguesa según el tamaño de pantalla
    <nav>{isMobile ? <BurgerNav /> : <DesktopNav />}</nav>
  );
}

export default Nav;
