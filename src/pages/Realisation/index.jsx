import React from 'react';
import Data from '../../data/index.json'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

const Realisation = () => {

    const ProjectCard = Data.map((Project)=>{
    const encodedTitle = encodeURIComponent(Project.id)
     
    const getIcon = (iconName) => {
        switch (iconName) {
          case 'faNode':
            return faNode;
          case 'faReact':
            return faReact;
        default:
            return null;
        }
      };

        return(
            
            <li key={Project.id} >
                <Link className='cards__list__card' to={`/realisation/${encodedTitle}`}>
                <FontAwesomeIcon className='cards__list__icons' icon={getIcon(Project.icon)}
                />
                <h3>{Project.title}</h3>
                <p>{Project.shortdescription || "Pas de description disponible"}</p>
                </Link>
            </li>
                
        )
    })
    
    return(
        <div className='realisation'>
        <h1 className='realisation__title'> Mes réalisations </h1>        
        <ul className='cards__list'>
        {ProjectCard}
        </ul>    
        </div>
    )
}

export default Realisation