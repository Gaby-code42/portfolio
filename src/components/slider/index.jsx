import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './style.scss'
import LeftArrow from '../../assets/fleche gauche.png'
import RightArrow from '../../assets/fleche droite.png'
import Data from '../../data/index.json'

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

    return (
        <div className="test">
            <div>
                <button onClick={Previous} className="Carousel__Button__Previous"><img src={LeftArrow} alt="fleche de gauche"/></button>
                <button onClick={Next} className="Carousel__Button__Next"><img src={RightArrow} alt="fleche de gauche"/></button>
                <span className="Carousel__indicatorImage">{currentIndex+1}/{images.length}</span>
            </div>
            <p>{ProjectData.description[currentIndex]}</p>
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