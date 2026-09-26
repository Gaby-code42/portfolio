import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faGlobe, faCalendarCheck, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const EMAIL = 'raphael.bonacina@hotmail.fr'

// Volontairement sans tarifs affichés : le périmètre d'un site vitrine et
// celui d'un site avec réservation n'ont rien à voir, un prix unique serait
// faux dans les deux cas.
//
// Icônes symboliques plutôt que logos de technos : le client ne choisit pas
// une prestation parce qu'elle est en Next.js, mais parce qu'elle répond à
// son besoin.
const OFFERS = [
  {
    icon: faGlobe,
    title: 'Site vitrine',
    text: "Présenter votre activité, vos prestations et vos coordonnées. Un site rapide, lisible sur mobile, que l'on trouve sur Google.",
    items: [
      'Conception sur mesure, pas de thème générique',
      'Responsive du mobile au grand écran',
      'Référencement et accessibilité soignés',
    ],
  },
  {
    icon: faCalendarCheck,
    title: 'Site avec fonctionnalités',
    text: "Quand le site doit faire quelque chose : prise de rendez-vous, formulaire, espace d'administration, base de données.",
    items: [
      'Réservation en ligne avec gestion des créneaux',
      'Espace d\'administration pour gérer vos contenus',
      'Base de données et sauvegardes',
    ],
  },
  {
    icon: faGaugeHigh,
    title: 'Reprise & optimisation',
    text: "Vous avez déjà un site, mais il est lent, mal référencé ou daté. J'audite l'existant et je corrige ce qui pénalise.",
    items: [
      'Audit performance, SEO et accessibilité',
      'Optimisation des images et du chargement',
      'Corrections priorisées par impact',
    ],
  },
]

const STEPS = [
  {
    title: 'On échange',
    text: "Un appel ou un message pour comprendre votre activité, vos besoins et ce que le site doit accomplir. Sans engagement.",
  },
  {
    title: 'Je vous fais une proposition',
    text: "Un périmètre écrit, un délai et un devis. Vous savez exactement ce qui est inclus avant de dire oui.",
  },
  {
    title: 'Je développe',
    text: "Vous suivez l'avancement sur un lien de prévisualisation, et on ajuste au fur et à mesure plutôt qu'à la fin.",
  },
  {
    title: 'Mise en ligne et suivi',
    text: "Je m'occupe du nom de domaine et de la mise en production, puis je vous montre comment gérer votre site au quotidien.",
  },
]

const Services = () => {
  return (
    <div className='services'>
      <h1 className='services__title'>Mes services</h1>

      <p className='services__intro'>
        Je conçois et développe des sites sur mesure pour les indépendants,
        artisans et petites structures. Pas de gabarit revendu tel quel : le
        site est construit autour de votre activité, et vous en restez
        propriétaire.
      </p>

      <section className='offers' aria-labelledby='offers-title'>
        <h2 className='services__section-title' id='offers-title'>Ce que je propose</h2>

        <ul className='offers__grid'>
          {OFFERS.map(({ icon, title, text, items }) => (
            <li className='offer' key={title}>
              <FontAwesomeIcon icon={icon} className='offer__icon' aria-hidden='true' />
              <h3 className='offer__title'>{title}</h3>
              <p className='offer__text'>{text}</p>
              <ul className='offer__items'>
                {items.map((item) => (
                  <li className='offer__item' key={item}>
                    <FontAwesomeIcon icon={faCheck} aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className='services__note'>
          Le tarif dépend du périmètre : nombre de pages, fonctionnalités,
          contenus à produire. Je l'établis sur devis, après notre premier
          échange — et il ne bouge pas en cours de route.
        </p>
      </section>

      <section className='steps' aria-labelledby='steps-title'>
        <h2 className='services__section-title' id='steps-title'>Comment ça se passe</h2>

        <ol className='steps__list'>
          {STEPS.map(({ title, text }, index) => (
            <li className='step' key={title}>
              <span className='step__number' aria-hidden='true'>{index + 1}</span>
              <div>
                <h3 className='step__title'>{title}</h3>
                <p className='step__text'>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className='proof' aria-labelledby='proof-title'>
        <h2 className='services__section-title' id='proof-title'>Un exemple concret</h2>
        <p className='proof__text'>
          Holi Therapy, un cabinet de soins du visage, n'avait aucune présence
          en ligne et gérait ses rendez-vous par téléphone. Le site livré
          présente ses prestations et prend les réservations directement en
          ligne.
        </p>
        <Link to='/realisation' className='proof__link'>
          Voir le projet en détail
        </Link>
      </section>

      <section className='contact' aria-labelledby='contact-title'>
        <h2 className='contact__title' id='contact-title'>Un projet en tête ?</h2>
        <p className='contact__text'>
          Décrivez-moi votre activité et ce que vous aimeriez, même vaguement.
          Je vous réponds avec un premier avis honnête — y compris si je pense
          que vous n'avez pas besoin de moi.
        </p>
        <a className='contact__btn' href={`mailto:${EMAIL}`}>
          Me contacter
        </a>
      </section>
    </div>
  );
};

export default Services;
