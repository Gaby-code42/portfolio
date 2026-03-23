import React, { useState } from 'react';
import Data from '../../data/index.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNode, faHtml5, faJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Realisation = () => {
    const [current, setCurrent] = useState(0)

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'faNode':    return faNode;
            case 'faReact':   return faReact;
            case 'faHtml5':   return faHtml5;
            case 'faJs':      return faJs;
            case 'faGlobe':   return faGlobe;
            default:          return null;
        }
    }

    const prev = () => setCurrent(c => (c - 1 + Data.length) % Data.length)
    const next = () => setCurrent(c => (c + 1) % Data.length)

    // Drag
    let startX = 0
    const onMouseDown = (e) => { startX = e.clientX }
    const onMouseUp = (e) => {
        const diff = startX - e.clientX
        if (diff > 60) next()
        else if (diff < -60) prev()
    }

    // Calcule les 5 cards visibles : [-1, 0, 1, 2, 3]
    const visibleCards = [-1, 0, 1, 2, 3].map(offset => {
        const idx = (current + offset + Data.length) % Data.length
        return { ...Data[idx], offset }
    })

    return (
        <div className='realisation'>
            <h1 className='realisation__title'>Mes réalisations</h1>

            <div 
                className='carousel'
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
                <div className='carousel__track'>
                    {visibleCards.map(({ id, title, icon, shortdescription, tags, github, demo, offset }) => {
                        const isSmall = offset === -1 || offset === 3
                        return (
                            <div 
                                key={`${id}-${offset}`}
                                className={`card ${isSmall ? 'card--small' : 'card--large'}`}
                                onClick={() => {
                                if (offset === -1) prev()
                                if (offset === 3) next()
                                }}
                                style={{ cursor: isSmall ? 'pointer' : 'default' }}
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
                                            target='_blank'
                                            rel='noreferrer'
                                            className='card__btn card__btn--demo'
                                            onClick={e => e.stopPropagation()}
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
                        )
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div className='carousel__nav'>
                <button className='carousel__btn' onClick={prev}>‹</button>
                <div className='carousel__dots'>
                    {Data.map((_, i) => (
                        <span 
                            key={i}
                            className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
                <button className='carousel__btn' onClick={next}>›</button>
            </div>
            
        </div>
    )
}

export default Realisation