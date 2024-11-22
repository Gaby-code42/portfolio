import React from 'react'
import Data from '../../data/index.json'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/slider';
import './style.scss'

function Project (){
    
    const { id } = useParams();
    const decodedTitle = decodeURIComponent(id);
    const ProjectData = Data.find((Project) => Project.id === decodedTitle)

    
    
    if (!ProjectData) {
        return (console.log('frero c pas bon'))
    } else{ ( console.log('ytu as tout ce quil te faut frero'))}
    
    return(
        <div className='projectContainer'>
        <div>
            <h2>Projet {ProjectData.title}</h2>
            <Carousel images = {ProjectData.pictures}/>
        </div>
        </div>
    )
}

export default Project