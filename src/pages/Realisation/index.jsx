import React from 'react';
import Data from '../../data/index.json'
import { Link } from 'react-router-dom'
import './style.scss'

const Realisation = () => {
    const ProjectCard = Data.map((project)=>{
        const encodedTitle = encodeURIComponent(project.id)

        return(
            <li key={project.id}>
                <Link to={`/realisation/${encodedTitle}`}>text
                </Link>
            </li>
        )
    })
    return(
        <div>
        {ProjectCard}      
        </div>
    )
}

export default Realisation