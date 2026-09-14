import SocialLinks from '../SocialLinks'
import './style.scss'

function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__social'>
        <h2 className='footer__social__title'>Réseaux</h2>
        <SocialLinks label='Réseaux sociaux de Raphaël Bonacina' />
        <a className='footer__mail' href='mailto:raphael.bonacina@hotmail.fr'>
          raphael.bonacina@hotmail.fr
        </a>
      </div>
      <p className='footer__design'>© {new Date().getFullYear()} — Raphaël Bonacina</p>
    </footer>
  )
}

export default Footer
