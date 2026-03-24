import React, { useState, useRef } from 'react';
import Data from '../../data/index.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNode, faHtml5, faJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Realisation = () => {
    const [current, setCurrent] = useState(0)
    const startX = useRef(0)

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'faNode':  return faNode;
            case 'faReact': return faReact;
            case 'faHtml5': return faHtml5;
            case 'faJs':    return faJs;
            case 'faGlobe': return faGlobe;
            default:        return null;
        }
    }

    const go = (dir) => {
        setCurrent(c => (c + dir + Data.length) % Data.length)
    }

    const onMouseDown = (e) => { startX.current = e.clientX }
    const onMouseUp = (e) => {
        const diff = startX.current - e.clientX
        if (diff > 60) go(1)
        else if (diff < -60) go(-1)
    }

    const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
    const onTouchEnd = (e) => {
        const diff = startX.current - e.changedTouches[0].clientX
        if (diff > 60) go(1)
        else if (diff < -60) go(-1)
    }

    const visibleCards = [-2, -1, 0, 1, 2].map(offset => {
        const idx = (current + offset + Data.length) % Data.length
        return { ...Data[idx], offset }
    })

    const getCardClass = (offset) => {
        switch (offset) {
            case 0: return "card card--center"
            case -1:
            case 1: return "card card--large"
            case -2:
            case 2: return "card card--small"
            default: return "card"
        }
    }

    return (
        <div className='realisation'>
            <h1 className='realisation__title'>Mes réalisations</h1>

            <div
                className='carousel'
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className='carousel__track'>
                    {visibleCards.map(({ id, title, icon, shortdescription, tags, github, demo, offset }) => (
                        <div
                            key={id}
                            className={getCardClass(offset)}
                        >
                            <FontAwesomeIcon
                                className='card__icon'
                                icon={getIcon(icon)}
                            />

                            <h3 className='card__title'>{title}</h3>

                            <p className='card__desc'>{shortdescription}</p>

                            <div className='card__tags'>
                                {tags.map((tag, i) => (
                                    <span key={i} className='card__tag'>{tag}</span>
                                ))}
                            </div>

                            <div className='card__btns'>
                                <a
                                    href={github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='card__btn card__btn--github'
                                    onClick={e => e.stopPropagation()}
                                >
                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>

                                {demo ? (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card__btn card__btn--demo"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Démo live
                                    </a>
                                ) : (
                                    <span className='card__btn card__btn--disabled'>
                                        Pas de démo
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='carousel__nav'>
                <button className='carousel__btn' onClick={() => go(-1)}>{'<'}</button>

                <div className='carousel__dots'>
                    {Data.map((_, i) => (
                        <span
                            key={i}
                            className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>

                <button className='carousel__btn' onClick={() => go(1)}>{'>'}</button>
            </div>
        </div>
    )
}

export default Realisation