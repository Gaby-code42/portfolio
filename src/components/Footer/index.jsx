import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.scss'

function Footer(){
    return(
        <div className='footer__container'>
            <div>
                <p className='footer__name'>RAPHAEL BONACINA</p>
                <p className='footer__job'>Développeur FullStack</p>
            </div>
            
            <nav>
            <h2 className="footer__nav__title">Données du site</h2>
                <ul className='footer__nav'> 
                    <li>
                        <Link to="/mentions-legales" className='footer__nav__link'>Mentions Légales</Link>
                    </li>
                    <li>
                        <Link to="/politique-confidentialite" className='footer__nav__link'>Politique de Confidentialité</Link>
                    </li>
                    <li>
                        <Link to="/cgu" className='footer__nav__link'>CGU</Link>
                    </li>
                </ul>
            </nav>
            <div className='footer__social'>
                <h2 className='footer__social__title'> Réseaux </h2>
                <nav>
                    <ul className='reseaux'>
                       <li>
                            <a href="https://www.instagram.com/votre_profil" target="_blank" rel="noopener noreferrer" className="reseaux__link" aria-label="lien vers la page instagram de Raphael"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                       </li>
                        <li>
                            <a href="https://www.linkedin.com/in/raphael-bonacina-40478333b/" target="_blank" rel="noopener noreferrer" className="reseaux__link" aria-label="lien vers la page linkdin de Raphael"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/votre_profil" target="_blank" rel="noopener noreferrer" className="reseaux__link" aria-label="lien vers la page twitter de Raphael"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className='footer__design'>@2024 - Créakif Design</p>
        </div>
    )
}

export default Footer