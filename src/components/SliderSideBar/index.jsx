import React from "react";
import StageDot from "../Stages";
import LeftArrow from '../../assets/fleche gauche.png'
import RightArrow from '../../assets/fleche droite.png'
import './style.scss'

const CarouselSidebar = ({
    title,
    details,
    description,
    images,
    currentIndex,
    onPrevious,
    onNext,
    onDotClick,
    activeImage,
    inactiveImage,
  }) => {
    return (
      <div className="carouselBox__sidebar">
        <h2 className="carouselBox__title">{title}</h2>
        <h3 className="carouselBox__details">{details}</h3>
        <p className="carouselBox__description">{description}</p>
        
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