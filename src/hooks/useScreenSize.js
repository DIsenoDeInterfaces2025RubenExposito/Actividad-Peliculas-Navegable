import { useState, useEffect } from 'react'; 
/*
  Recordatorio: useScreenSize hook sacado mediante IA que en este caso abarca un breakpoint para móvil
  tambien puedo usar MediaQuerys para hacerlo https://usehooks.com/useMedia/ o directamente en CSS 
  (generalmente es mejor usar CSS para temas de diseño) pero como ya esta hecho de momento uso este.
  */

function useScreenSize(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const checkScreenSize = () => {
      // Compara el ancho actual con el punto de ruptura
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Añade el detector de eventos para el cambio de tamaño
    window.addEventListener('resize', checkScreenSize);

    // Ejecuta la verificación inicial por si acaso
    checkScreenSize();

    // Función de limpieza: elimina el detector de eventos cuando el componente se desmonta
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]); // El efecto se vuelve a ejecutar si el breakpoint cambia

  return isMobile;
}

export default useScreenSize;