import React from 'react';
import Data from '../../data/index.json'
import { Link } from 'react-router-dom'
import './style.scss'

const Realisation = () => {

    const ProjectCard = Data.map((Project)=>{
    const encodedTitle = encodeURIComponent(Project.id)
    const imagePath = require(`../../data/image/${Project.pictures[0]}`) 
     

        return(
            
            <li key={Project.id} className='cards__list__card'>
                <div className='cards__list__cardVisuel'>
                <Link  to={`/realisation/${encodedTitle}`}>
                <img src={imagePath} alt={Project.title}/>
                <div className='cards__list__cardText'>
                <h3>{Project.title}</h3>
                <p>{Project.shortdescription || "Pas de description disponible"}</p>
                </div>
                </Link>
                </div>
            </li>      
        )
    })
    
    return(
        <div className='cards'>
        <h1 className='cards__title'> Mes réalisations </h1>   
        <div>        
        <ul className='cards__list'>
        {ProjectCard}
        </ul>  
        </div>     
        </div>
    )
}

export default Realisation