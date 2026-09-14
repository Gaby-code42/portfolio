import { useEffect, useRef } from 'react'
import CVPdf from '../../assets/CVpro.pdf'
import './style.scss'

const DEFAULT_MESSAGE =
  "Vous avez pris le temps d'explorer chaque page — c'est rare. Si mon profil retient votre attention, je serai heureux d'échanger avec vous."

const FOCUSABLE = 'a[href], button:not([disabled])'

export function CongratulationsPopup({
  visible,
  onDismiss,
  ctaLabel = 'Télécharger mon CV',
  message,
}) {
  const cardRef = useRef(null)
  const lastFocusedRef = useRef(null)

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return

    lastFocusedRef.current = document.activeElement
    const card = cardRef.current
    card?.querySelector(FOCUSABLE)?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onDismiss?.()
        return
      }
      if (e.key !== 'Tab' || !card) return

      const items = Array.from(card.querySelectorAll(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [visible, onDismiss])

  if (!visible) return null

  return (
    <div className="cpop-overlay" onClick={onDismiss}>
      <div className="cpop-scanline" aria-hidden="true" />

      <div
        className="cpop-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cpop-title"
        aria-describedby="cpop-msg"
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cpop-corner cpop-corner-tl" aria-hidden="true" />
        <div className="cpop-corner cpop-corner-tr" aria-hidden="true" />
        <div className="cpop-corner cpop-corner-bl" aria-hidden="true" />
        <div className="cpop-corner cpop-corner-br" aria-hidden="true" />

        <p className="cpop-badge">
          <span className="cpop-badge-dot" aria-hidden="true" />
          MISSION COMPLETE
        </p>

        <h2 className="cpop-title" id="cpop-title">
          PORTFOLIO
          <span className="cpop-title-accent">EXPLORÉ À 100%</span>
        </h2>

        <div className="cpop-divider" aria-hidden="true" />

        <p className="cpop-msg" id="cpop-msg">
          {message || DEFAULT_MESSAGE}
        </p>

        <div className="cpop-cubes-row" aria-hidden="true">
          <div className="cpop-cube" />
          <div className="cpop-cube" />
          <div className="cpop-cube" />
        </div>

        <div className="cpop-actions">
          <a
            className="cpop-btn-main"
            href={CVPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>
          <button type="button" className="cpop-btn-skip" onClick={onDismiss}>
            CONTINUER L'EXPLORATION
          </button>
        </div>
      </div>
    </div>
  )
}
