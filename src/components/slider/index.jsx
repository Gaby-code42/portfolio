import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from '../../data/index.json'
import './style.scss'
import CarouselSidebar from "../SliderSideBar";

const Carousel = ({ images }) => {

    const { id} = useParams();
    const decodedTitle = decodeURIComponent(id);
    const ProjectData = Data.find((Project) => Project.id === decodedTitle)

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const Next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const Previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };

    const imagePath = require(`../../data/image/${ProjectData.pictures[currentIndex]}`)

    return (
        <div className="carouselBox">
                     
            <CarouselSidebar
                title={`Projet ${ProjectData.title}`}
                details={ProjectData.details[currentIndex]}
                description={ProjectData.description[currentIndex]}
                date={ProjectData.date[currentIndex]}
                images={images}
                currentIndex={currentIndex}
                onPrevious={Previous}
                onNext={Next}
                onDotClick={handleDotClick}  
                link={ProjectData.link}
            />   
                    {currentIndex === 4 && (
            <div className="carouselBox__link">
            <a href={ProjectData.link} target="_blank" rel="noopener noreferrer">
            {ProjectData.link}
            </a>
            </div>
        )}         
            <div className="Carousel">
                <img 
                src={imagePath}
                alt={`Slide ${currentIndex}`}
                className="Carousel__Image"
                />            
            </div>
           
        </div>

    );
};

export default Carousel;