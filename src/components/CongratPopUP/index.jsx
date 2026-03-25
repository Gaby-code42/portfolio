import { useEffect} from 'react'
import './style.scss'


export function CongratulationsPopup({
  visible,
  onDismiss,
  onCTA,
  ctaLabel = 'Télécharger mon CV',
  message,
}) {
  const defaultMessage =
    "Vous avez pris le temps d'explorer chaque page — c'est rare. Si mon profil retient votre attention, je serai heureux d'échanger avec vous."


  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [visible])

  if (!visible) return null

  return (
       

      <div className="cpop-overlay" onClick={onDismiss}>
        <div className="cpop-scanline" />

        <div className="cpop-card" onClick={e => e.stopPropagation()}>
        
          <div className="cpop-corner cpop-corner-tl" />
          <div className="cpop-corner cpop-corner-tr" />
          <div className="cpop-corner cpop-corner-bl" />
          <div className="cpop-corner cpop-corner-br" />

          <div className="cpop-badge">
            <div className="cpop-badge-dot" />
            MISSION COMPLETE
          </div>


          <div className="cpop-title">
            PORTFOLIO
            <span className="cpop-title-accent">EXPLORÉ À 100%</span>
          </div>

          <div className="cpop-divider" />


          <p className="cpop-msg">{message || defaultMessage}</p>


          <div className="cpop-cubes-row">
            <div className="cpop-cube" />
            <div className="cpop-cube" />
            <div className="cpop-cube" />
          </div>

          {/* Actions */}
          <div className="cpop-actions">
          <button
          className="cpop-btn-main"
          onClick={() => window.open('CVPdf', "_blank")}>
          {ctaLabel}
          </button>
            <button className="cpop-btn-skip" onClick={onDismiss}>
              CONTINUER L'EXPLORATION
            </button>
          </div>
        </div>
      </div>
  )
}