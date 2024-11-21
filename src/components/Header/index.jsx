import { useLocation , Link} from "react-router-dom";
import React from 'react';
import './style.scss'

function Header (){
    const location = useLocation();

    return(
        <div className="NavContainer">
            <div>
                <Link className='Logo' to="/"> 
                RAPHAEL BONACINA
                </Link>
            </div>
            <nav>
                <ul className="NavContainer__box"> 
                <li>
                    <Link to='/' className={`NavContainer__box__link ${location.pathname === '/' ? 'active__link' : ''}`}>Accueil</Link>
                </li>
                <li>
                    <Link to='/realisation' className={`NavContainer__box__link ${location.pathname === '/realisation' ? 'active__link' : ''}`}>Réalisation</Link>
                </li>
                <li>
                    <Link to='/about' className={`NavContainer__box__link ${location.pathname === '/about' ? 'active__link' : ''}`}>À propos</Link>
                </li>
                <li>
                    <a className="NavContainer__box__link" href="mailto:tonemail@example.com?subject=Demande d'information&body=Bonjour, je souhaite en savoir plus sur vos services.">Contact</a>
                </li>
            </ul>
            </nav>
            
        </div>
    )
}

export default Header