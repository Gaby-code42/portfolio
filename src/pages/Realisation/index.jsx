import React from 'react';
import Data from '../../data/index.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import TechIcon from '../../components/TechIcon'
import CodePreview from '../../components/CodePreview'
import codeSnippets from '../../data/codeSnippets'
import './style.scss'

// Les captures vivent dans public/projects/ : le nom de fichier est stocké
// dans data/index.json, donc on le résout à l'exécution plutôt que par un
// import statique. `cover: null` ⇒ on retombe sur le panneau au logo.
const coverUrl = (file) => `${process.env.PUBLIC_URL}/projects/${file}`

const Cover = ({ project, sizes }) => (
    project.cover ? (
        <img
            className='cover__image'
            src={coverUrl(project.cover)}
            alt={`Aperçu du site ${project.title}`}
            loading='lazy'
            sizes={sizes}
        />
    ) : (
        <div className='cover__fallback' aria-hidden='true'>
            <TechIcon name={project.icon} className='cover__fallback-icon' />
        </div>
    )
)

const Tags = ({ tags }) => (
    <ul className='tags'>
        {tags.map((tag) => (
            <li className='tags__item' key={tag}>{tag}</li>
        ))}
    </ul>
)

// Un projet livré à un client et un exercice de formation ne se défendent pas
// pareil : on n'affiche que les liens qui existent, plutôt qu'un « Pas de
// démo » grisé qui donne l'impression d'un travail inachevé.
const Links = ({ project, demoLabel = 'Voir le site', snippet }) => (
    <div className='links'>
        {project.demo && (
            <a
                href={project.demo}
                target='_blank'
                rel='noreferrer'
                className='links__btn links__btn--demo'
            >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden='true' />
                {demoLabel}
                <span className='sr-only'>{` — ${project.title}, nouvel onglet`}</span>
            </a>
        )}

        {project.github && (
            <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='links__btn links__btn--code'
            >
                <FontAwesomeIcon icon={faGithub} aria-hidden='true' />
                Code source
                <span className='sr-only'>{` de ${project.title} sur GitHub, nouvel onglet`}</span>
            </a>
        )}

        {snippet && <CodePreview project={project} snippet={snippet} />}
    </div>
)

const FeaturedProject = ({ project }) => (
    <section className='featured' aria-labelledby='featured-title'>
        <p className='featured__flag'>{project.kind}</p>

        <div className='featured__body'>
            <div className='featured__visual'>
                <Cover project={project} sizes='(max-width: 1024px) 92vw, 620px' />
            </div>

            <div className='featured__content'>
                <h2 className='featured__title' id='featured-title'>{project.title}</h2>

                <dl className='featured__story'>
                    {project.story.map(({ label, text }) => (
                        <div className='featured__step' key={label}>
                            <dt className='featured__step-label'>{label}</dt>
                            <dd className='featured__step-text'>{text}</dd>
                        </div>
                    ))}
                </dl>

                <Tags tags={project.tags} />
                <Links project={project} />
            </div>
        </div>
    </section>
)

const ProjectCard = ({ project }) => (
    <li className='card'>
        <div className='card__visual'>
            <Cover project={project} sizes='(max-width: 768px) 92vw, 360px' />
        </div>

        <div className='card__body'>
            <p className='card__kind'>{project.kind}</p>
            <h3 className='card__title'>{project.title}</h3>
            <p className='card__desc'>{project.shortdescription}</p>
            <Tags tags={project.tags} />
            <Links
                project={project}
                demoLabel='Voir la démo'
                snippet={codeSnippets[project.id]}
            />
        </div>
    </li>
)

const Realisation = () => {
    const featured = Data.find((project) => project.featured)
    const others = Data.filter((project) => !project.featured)

    return (
        <div className='realisation'>
            <h1 className='realisation__title'>Mes réalisations</h1>

            {featured && <FeaturedProject project={featured} />}

            <section className='projects' aria-labelledby='projects-title'>
                <h2 className='projects__title' id='projects-title'>
                    Les autres projets
                </h2>
                <ul className='projects__grid'>
                    {others.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Realisation
