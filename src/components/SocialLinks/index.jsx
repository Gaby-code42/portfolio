import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/raphael-bonacina-40478333b/',
    icon: faLinkedin,
    label: 'Profil LinkedIn de Raphaël Bonacina',
  },
  {
    href: 'https://github.com/Gaby-code42/',
    icon: faGithub,
    label: 'Profil GitHub de Raphaël Bonacina',
  },
  {
    href: 'https://www.instagram.com/raphael.bonacina/',
    icon: faInstagram,
    label: 'Profil Instagram de Raphaël Bonacina',
  },
]

function SocialLinks({ label = 'Réseaux sociaux' }) {
  return (
    <nav aria-label={label}>
      <ul className="reseaux">
        {SOCIALS.map(({ href, icon, label: linkLabel }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="reseaux__link"
              aria-label={linkLabel}
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialLinks
