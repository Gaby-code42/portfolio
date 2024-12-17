import React from "react";
import StageDot from "../Stages";
import LeftArrow from '../../assets/fleche gauche.png'
import RightArrow from '../../assets/fleche droite.png'
import { useParams } from "react-router-dom";
import Data from '../../data/index.json'
import './style.scss'

const CarouselSidebar = ({
    title,
    details,
    description,
    date,
    images,
    currentIndex,
    onPrevious,
    onNext,
    onDotClick,
    activeImage,
    inactiveImage,
 
  }) => {

    const { id} = useParams();
    const decodedTitle = decodeURIComponent(id);
    const ProjectData = Data.find((Project) => Project.id === decodedTitle)
    
    return (
      <div className="carouselBox__sidebar">
        <div className="carouselBox__blocText">
        <h1 className="carouselBox__title">{title}</h1>
        <h2 className="carouselBox__details">{details}</h2>
        <p className="carouselBox__description">{description}</p>
        <p className="carouselBox__date">{date}</p>
        {currentIndex === 4 && (
            <div className="carouselBox__link">
            <a href={ProjectData.link} target="_blank" rel="noopener noreferrer">
            {ProjectData.link}
            </a>
            </div>
        )}  
        </div>
        <div className="Carousel__Dots">
            <button onClick={onPrevious} className="Carousel__Button">
                <img src={LeftArrow} alt="fleche de gauche" />
            </button>
          <StageDot
            totalPages={images.length}
            currentPage={currentIndex}
            onDotClick={onDotClick}
            activeImage={activeImage}
            inactiveImage={inactiveImage}
          />
            <button onClick={onNext} className="Carousel__Button">
               <img src={RightArrow} alt="fleche de droite" />
            </button>
        </div>
      </div>
    );
}
    
export default CarouselSidebar;