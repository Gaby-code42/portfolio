import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '../../data/image/avatar.jpg'
import SocialLinks from '../../components/SocialLinks'
import TechIcon, { techTitle } from '../../components/TechIcon'
import { SKILL_GROUPS } from '../../data/skills'
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
          {/* Deux publics arrivent ici : des recruteurs et des clients venus
              d'annonces. Le second ne doit pas lire « il cherche un employeur,
              pas des clients ». */}
          <ul className='description__availability'>
            <li className='description__badge description__badge--alt'>
              🎓 En recherche d'alternance
            </li>
            <li>
              {/* Le client venu d'une annonce doit pouvoir aller droit aux
                  prestations sans traverser tout le portfolio. */}
              <Link
                to='/services'
                className='description__badge description__badge--freelance'
              >
                💼 Disponible pour vos projets web →
              </Link>
            </li>
          </ul>

          <div className='description__containerBtn'>
          <Link to='/realisation' className='btn btn--primary'>
          Voir mes projets
          </Link>
            <a href="mailto:raphael.bonacina@hotmail.fr" className='btn btn--secondary'>Me contacter</a>
          </div>
          
          <SocialLinks label='Réseaux sociaux de Raphaël Bonacina' />
        </div>

      </div>      

      <section className='skill' aria-labelledby='skill-title'>
        <h2 className='skill__title' id='skill-title'>Skills</h2>

        <div className='skill__container'>
          {SKILL_GROUPS.map(({ title, skills }) => (
            <div className='skill__category' key={title}>
              <h3 className='skill__category-title'>{title}</h3>
              <ul className='skill__grid'>
                {skills.map(({ icon, label }) => (
                  <li className='skill__badge' key={icon}>
                    <TechIcon name={icon} />
                    {label ?? techTitle(icon)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
