import './style.scss'
import React from 'react';
import { useLocation , Link} from "react-router-dom";


const ModalHeader = ({onClose}) => {

  const location = useLocation();
  
  return (
    
    <div>
                <nav>
                <ul className="NavContainer__box"> 
                <li>
                    <Link to='/' className={`NavContainer__box__link ${location.pathname === '/' ? 'active__link' : ''}`} onClick={onClose}>Accueil</Link>
                </li>
                <li>
                    <Link to='/realisation' className={`NavContainer__box__link ${location.pathname === '/realisation' ? 'active__link' : ''}`} onClick={onClose}>Réalisations</Link>
                </li>
                <li>
                    <Link to='/about' className={`NavContainer__box__link ${location.pathname === '/about' ? 'active__link' : ''}`} onClick={onClose}>À propos</Link>
                </li>
                <li>
                    <a className="NavContainer__box__link" href="mailto:tonemail@example.com?subject=Demande d'information&body=Bonjour, je souhaite en savoir plus sur vos services.">Contact</a>
                </li>
            </ul>
            </nav>
    </div>
  );
};

export default ModalHeader;