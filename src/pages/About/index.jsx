import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const About = () => {


  return (
    
<div className='About'>
<h2 className="About__Title">A propos</h2>
<div className='About__Container'>
  <span className='About__Logo'>RB</span>
  <div>  
  <div>
  <h2 className='About__TitleCtn'>Raphael <span className='About__TitleCtnNom'>Bonacina</span></h2>
  <h3 className='About__TitleCtn'> Développeur <span className='About__TitleCtnNom'>Web React</span></h3>
  </div>
  <p>Passionné par la création d'expériences web fluides et performantes, du backend à l'interface</p>
  <p className='About__BannerRh'><FontAwesomeIcon icon={faCircleDot}/> Disponible en alternance</p></div></div>
<div className='About__Cards'>
    <ul>
      <li>
        <h3>1+</h3>
        <p>Années de pratique</p>
      </li>
      <li>
        <h3>2</h3>
        <p>Projet</p>
      </li>
      <li>
        <h3>∞</h3>
        <p>Envie d'apprendre</p>
      </li>
    </ul>
  </div>
  



</div>
  );
};

export default About;