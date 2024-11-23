import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from '../../data/index.json'
import './style.scss'
import CarouselSidebar from "../SliderSideBar";
import ActiveDot from '../../assets/active.png'
import InactiveDot from '../../assets/inactif.png'
import MySvgCard from '../../assets/design_projet_Plandetravail1.svg'


const Carousel = ({ images }) => {

    const { id } = useParams();
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

    return (
        <div className="carouselBox">
            <div className="sizingHud"></div>
            <div className="carouselBox__sidebar">
            <CarouselSidebar
                title={`Projet ${ProjectData.title}`}
                details={ProjectData.details[currentIndex]}
                description={ProjectData.description[currentIndex]}
                images={images}
                currentIndex={currentIndex}
                onPrevious={Previous}
                onNext={Next}
                onDotClick={handleDotClick}
                activeImage={ActiveDot}
                inactiveImage={InactiveDot}
            />                
            </div>
            <img src={MySvgCard} alt='description' className="backgroundCard"/>
            <div className="Carousel">
                <img 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="Carousel__Image"
                />            
            </div>
        </div>

    );
};

export default Carousel;