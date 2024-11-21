import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useBodyClass = () => {
  const location = useLocation();

  const getBodyClass = useCallback(() => {
    if (location.pathname === '/') return 'home-background';
    if (location.pathname === '/realisation') return 'realisation-background';
    return '';
  }, [location]); 

  useEffect(() => {
   
    const bodyClass = getBodyClass();
    document.body.className = ''; 
    if (bodyClass) {
      document.body.classList.add(bodyClass); 
    }

    // Nettoyage
    return () => {
      document.body.className = ''; 
    };
  }, [getBodyClass]); 
};

export default useBodyClass;