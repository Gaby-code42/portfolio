import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '../../data/image/avatar.jpg'
import SocialLinks from '../../components/SocialLinks'
import './style.scss'

const Home = () => {


  return (
    <div className="home">
      <div className='heroSection'>
      <div className='avatar-container'>
          <div className='avatar-ring'></div>
          <div className='scan-line'></div>
          <div className='avatar-base'>
            <img src={Avatar} alt='Raphaël Bonacina' />
          </div>
          <div className='avatar-glitch-layer layer-green' aria-hidden='true'>
            <img src={Avatar} alt='' />
          </div>
          <div className='avatar-glitch-layer layer-red' aria-hidden='true'>
            <img src={Avatar} alt='' />
          </div>
        </div>

        <div className='description'>

          <p className='description__subtitle'>Je suis Raphaël Bonacina</p>
          <h1 className='description__title'>DÉVELOPPEUR WEB FULL-STACK</h1>
          <p className='description__text'>
          Développeur React / Next.js curieux et persévérant, toujours motivé à apprendre et à créer des projets performants et sur mesure.
          </p>
          <p className='description__textBanner'>
            🎓 Actuellement à la recherche d'une alternance en développement web.
          </p>

          <div className='description__containerBtn'>
          <Link to='/realisation' className='btn btn--primary'>
          Voir mes projets
          </Link>
            <a href="mailto:raphael.bonacina@hotmail.fr" className='btn btn--secondary'>Me contacter</a>
          </div>
          
          <SocialLinks label='Réseaux sociaux de Raphaël Bonacina' />
        </div>

      </div>      

<h2 className='skill__title'>Skills</h2>

<div className='skill__container'>
  <div className='skill__category'>
    <h3 className='skill__category-title'>Front-end</h3>
    <div className='skill__grid'>
      <div className='skill__badge'><span className='skill__icon skill__icon--html'>H5</span> HTML</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--css'>CSS</span> CSS</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--js'>JS</span> JavaScript</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--ts'>TS</span> TypeScript</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--react'>⚛</span> React</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--next'>N</span> Next.js</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--scss'>Sc</span> SCSS</div>
    </div>
  </div>

  <div className='skill__category'>
    <h3 className='skill__category-title'>Back-end</h3>
    <div className='skill__grid'>
      <div className='skill__badge'><span className='skill__icon skill__icon--node'>N</span> Node.js</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--supabase'>S</span> Supabase</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--mongo'>M</span> MongoDB</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--mysql'>SQL</span> MySQL</div>
    </div>
  </div>

  <div className='skill__category'>
    <h3 className='skill__category-title'>Outils</h3>
    <div className='skill__grid'>
      <div className='skill__badge'><span className='skill__icon skill__icon--figma'>F</span> Figma</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--git'>G</span> Git & GitHub</div>
      <div className='skill__badge'><span className='skill__icon skill__icon--vercel'>▲</span> Vercel</div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
