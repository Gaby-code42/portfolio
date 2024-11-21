import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div>
            <div>
                <p>RAPHAEL BONACINA</p>
                <p>Développeur FullStack</p>
            </div>
            <div>
                Données du site
                Mentions Légales
                Politique de confidentialité
            </div>
            <div className='Container__Footer'>
                <p>réseaux</p>
                <div className='Reseaux'>
                <a href="https://www.instagram.com/votre_profil" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/votre_profil" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com/votre_profil" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                </div>
            </div>
            <p>2024 - Créakif Design</p>
        </div>
    )
}

export default Footer