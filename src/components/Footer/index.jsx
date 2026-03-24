
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './style.scss'

export default function Footer({ footerRef }) {
    return (
      <footer ref={footerRef} className='footer__container'>
        <div className='footer__social'>
          <h2 className='footer__social__title'> Réseaux </h2>
          <nav>
            <ul className='reseaux'>
              <li>
                <a
                  href="https://www.instagram.com/raphael.bonacina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reseaux__link"
                  aria-label="lien vers la page instagram de Raphael"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/raphael-bonacina-40478333b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reseaux__link"
                  aria-label="lien vers la page linkdin de Raphael"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <p className='footer__design'>@2024 - Créakif Design</p>
      </footer>
    )
  }