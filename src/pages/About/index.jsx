import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import Data from '../../data/index.json'
import './style.scss';

const About = () => {
  return (
    <div className='About'>
      <h1 className="About__Title">À propos</h1>

      <div className='About__Container'>
        <span className='About__Logo' aria-hidden='true'>RB</span>
        <div>
          <div>
            <h2 className='About__TitleCtn'>
              Raphaël <span className='About__TitleCtnNom'>Bonacina</span>
            </h2>
            <p className='About__TitleCtn About__TitleRole'>
              Développeur <span className='About__TitleCtnNom'>Web React</span>
            </p>
          </div>
          <p>
            Passionné par la création d'expériences web fluides et performantes,
            du back-end à l'interface.
          </p>
          <p className='About__BannerRh'>
            <FontAwesomeIcon icon={faCircleDot} aria-hidden='true' /> Disponible en alternance
          </p>
        </div>
      </div>

      <div className='About__Cards'>
        <ul>
          <li>
            <p className='About__CardsNumber'>1+</p>
            <p>Année de pratique</p>
          </li>
          <li>
            <p className='About__CardsNumber'>{Data.length}</p>
            <p>{Data.length > 1 ? 'Projets réalisés' : 'Projet réalisé'}</p>
          </li>
          <li>
            <p className='About__CardsNumber'>∞</p>
            <p>Envie d'apprendre</p>
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
