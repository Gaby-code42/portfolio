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

    const onKeyDown = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
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
                role='group'
                aria-roledescription='carrousel'
                aria-label='Mes projets'
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className='carousel__track' id='carousel-track' aria-live='polite'>
                    {visibleCards.map(({ id, title, icon, shortdescription, tags, github, demo, offset }) => (
                        <div
                            key={id}
                            className={getCardClass(offset)}
                            aria-hidden={offset !== 0}
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
                                {github ? (
                                    <a
                                        href={github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='card__btn card__btn--github'
                                        tabIndex={offset === 0 ? undefined : -1}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className='sr-only'>{`Code source de ${title} sur `}</span>
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </a>
                                ) : (
                                    <span className='card__btn card__btn--disabled'>
                                        Code privé
                                    </span>
                                )}

                                {demo ? (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card__btn card__btn--demo"
                                        tabIndex={offset === 0 ? undefined : -1}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Démo live<span className='sr-only'>{` de ${title}`}</span>
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
                <button
                    type='button'
                    className='carousel__btn'
                    onClick={() => go(-1)}
                    aria-label='Projet précédent'
                    aria-controls='carousel-track'
                >
                    <span aria-hidden='true'>{'<'}</span>
                </button>

                <div className='carousel__dots'>
                    {Data.map((project, i) => (
                        <button
                            key={project.id}
                            type='button'
                            className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Afficher le projet ${project.title}`}
                            aria-current={i === current ? 'true' : undefined}
                        />
                    ))}
                </div>

                <button
                    type='button'
                    className='carousel__btn'
                    onClick={() => go(1)}
                    aria-label='Projet suivant'
                    aria-controls='carousel-track'
                >
                    <span aria-hidden='true'>{'>'}</span>
                </button>
            </div>
        </div>
    )
}

export default Realisation