import React from 'react'
import Data from '../../data/index.json'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Slider';
import './style.scss'

function Project (){
    
    const { id } = useParams();
    const decodedTitle = decodeURIComponent(id);
    const ProjectData = Data.find((Project) => Project.id === decodedTitle)
        
    return(
        <div className='background__projet'>
            <Carousel images = {ProjectData.pictures}/>
        </div>
        
    )
}

export default Project