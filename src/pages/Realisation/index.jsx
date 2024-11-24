import React from 'react';
import Data from '../../data/index.json'
import { Link } from 'react-router-dom'
import './style.scss'

const Realisation = () => {

    const ProjectCard = Data.map((Project)=>{
    const encodedTitle = encodeURIComponent(Project.id)
        return(
            <li key={Project.id} className='cards__list__card'>
                <Link to={`/realisation/${encodedTitle}`}>
                <img src={Project.pictures[0]} alt={Project.title} />
                </Link>
            </li>      
        )
    })
    
    return(
        <div className='cards'>
        <div className='cards__BannerTitle'>
        <h2> Mes réalisations </h2>
        </div>    
        <ul className='cards__list'>
        {ProjectCard}
        </ul>      
        </div>
    )
}

export default Realisation