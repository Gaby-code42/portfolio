import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import Data from '../../data/index.json'
import Avatar from '../../data/image/avatar.jpg'
import { SKILL_COUNT } from '../../data/skills'
import './style.scss';

const About = () => {
  const clientProjects = Data.filter((projet) => projet.kind === 'Site client en production').length

  return (
    <div className='About'>
      <h1 className="About__Title">À propos</h1>

      <div className='About__Container'>
        {/* Le même avatar illustré que sur l'accueil : les initiales « RB »
            cassaient la reconnaissance d'une page à l'autre. */}
        <img className='About__Avatar' src={Avatar} alt='Raphaël Bonacina' />
        <div>
          <div>
            <h2 className='About__TitleCtn'>
              Raphaël <span className='About__TitleCtnNom'>Bonacina</span>
            </h2>
            <p className='About__TitleCtn About__TitleRole'>
              Développeur web full-stack <span className='About__TitleCtnNom'>React / Next.js</span>
            </p>
          </div>
          <p>
            Passionné par la création d'expériences web fluides et performantes,
            du back-end à l'interface.
          </p>
          <ul className='About__Availability'>
            <li className='About__BannerRh'>
              <FontAwesomeIcon icon={faCircleDot} aria-hidden='true' /> Disponible en alternance
            </li>
            <li className='About__BannerRh About__BannerRh--freelance'>
              <FontAwesomeIcon icon={faCircleDot} aria-hidden='true' /> Ouvert aux projets freelance
            </li>
          </ul>
        </div>
      </div>

      {/* Des chiffres vérifiables plutôt que « 1+ année » et « ∞ envie
          d'apprendre », qui sonnaient comme des remplissages. */}
      <div className='About__Cards'>
        <ul>
          <li>
            <p className='About__CardsNumber'>{clientProjects}</p>
            <p>{clientProjects > 1 ? 'Sites clients en production' : 'Site client en production'}</p>
          </li>
          <li>
            <p className='About__CardsNumber'>{Data.length}</p>
            <p>{Data.length > 1 ? 'Projets réalisés' : 'Projet réalisé'}</p>
          </li>
          <li>
            <p className='About__CardsNumber'>{SKILL_COUNT}</p>
            <p>Technologies pratiquées</p>
          </li>
        </ul>
      </div>

      <div className='About__CtnParcours'>
        <section className='About__Parcours'>
          <h2>Formation</h2>
          <ul>
            <li>
              <h3>OpenClassrooms — Développeur Web</h3>
              <p>
                Formation en alternance avec projets professionnalisants :
                intégration de maquettes, JavaScript, React, API REST Node.js,
                SEO et accessibilité.
              </p>
            </li>
          </ul>
        </section>

        <section className='About__Motivation'>
          <h2>Expérience</h2>
          <ul>
            <li>
              <h3>Holi Therapy — site client</h3>
              <p>
                Site vitrine et réservation en ligne livré à un cabinet de soins
                du visage. Next.js et Supabase, de la conception à la mise en
                production.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
