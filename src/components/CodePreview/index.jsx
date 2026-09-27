import { useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faXmark } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

// <dialog> natif avec showModal() : le navigateur gère déjà le piège du
// focus, la touche Échap, le fond et le retour du focus sur le bouton.
export function CodePreview({ project, snippet }) {
    const dialogRef = useRef(null)
    const titleId = useId()

    const [highlighted, setHighlighted] = useState(null)

    // La coloration (~15 Ko gzip) vit dans un chunk à part, chargé au survol
    // du bouton ou à l'ouverture : les visiteurs qui n'ouvrent aucun aperçu ne
    // la téléchargent pas. En attendant, le code s'affiche en texte brut.
    const loadHighlight = () => {
        if (highlighted) return
        import('./highlight').then(({ default: highlight }) => {
            setHighlighted(highlight(snippet))
        })
    }

    const open = () => {
        loadHighlight()
        dialogRef.current?.showModal()
    }
    const close = () => dialogRef.current?.close()

    // Un clic sur le fond (hors du panneau) ferme aussi la fenêtre.
    const onDialogClick = (e) => {
        if (e.target === dialogRef.current) close()
    }

    return (
        <>
            <button
                type='button'
                className='links__btn links__btn--preview'
                onClick={open}
                onPointerEnter={loadHighlight}
                onFocus={loadHighlight}
            >
                <FontAwesomeIcon icon={faCode} aria-hidden='true' />
                Aperçu du code
                <span className='sr-only'>{` de ${project.title}`}</span>
            </button>

            <dialog
                ref={dialogRef}
                className='code-preview'
                aria-labelledby={titleId}
                onClick={onDialogClick}
            >
                <div className='code-preview__panel'>
                    <header className='code-preview__header'>
                        <div>
                            <h2 className='code-preview__title' id={titleId}>{project.title}</h2>
                            <p className='code-preview__file'>{snippet.file}</p>
                        </div>
                        <button type='button' className='code-preview__close' onClick={close}>
                            <FontAwesomeIcon icon={faXmark} aria-hidden='true' />
                            <span className='sr-only'>Fermer l'aperçu</span>
                        </button>
                    </header>

                    <p className='code-preview__note'>{snippet.note}</p>

                    <pre className='code-preview__code' tabIndex={0}>
                        {highlighted ? (
                            <code
                                className='hljs'
                                dangerouslySetInnerHTML={{ __html: highlighted }}
                            />
                        ) : (
                            <code className='hljs'>{snippet.code}</code>
                        )}
                    </pre>

                    {project.github && (
                        <a
                            className='code-preview__repo'
                            href={project.github}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Voir le dépôt complet sur GitHub
                            <span className='sr-only'>, nouvel onglet</span>
                        </a>
                    )}
                </div>
            </dialog>
        </>
    )
}

export default CodePreview
