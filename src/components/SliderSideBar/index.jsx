import React from "react";
import StageDot from "../Stages";
import LeftArrow from '../../assets/fleche gauche.png'
import RightArrow from '../../assets/fleche droite.png'
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
    return (
      <div className="carouselBox__sidebar">
        <div className="carouselBox__blocText">
        <h1 className="carouselBox__title">{title}</h1>
        <h2 className="carouselBox__details">{details}</h2>
        <p className="carouselBox__description">{description}</p>
        <p className="carouselBox__date">{date}</p>
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