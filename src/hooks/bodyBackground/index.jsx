import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useBodyClass = () => {
  
  const location = useLocation();

  const getBodyClass = useCallback(() => {
    if (location.pathname === '/') return 'home-background';
    if (location.pathname === '/realisation') return 'realisation-background';
    if (location.pathname === '/about') return 'realisation-background'
    if (location.pathname === '/realisation/:id') return 'realisation-background'
    if (/^\/realisation\/\d+$/.test(location.pathname)) {
      return 'realisation-background'; // Background pour les projets individuels
    }
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