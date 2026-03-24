import { useEffect, useRef, useState } from 'react'
import './style.scss' 

const TOTAL_CUBES = 15

export function LifeBar({ pct = 0, pagesCompleted = [] }) {
  const prevPct = useRef(pct)
  const [flash, setFlash] = useState(false)

  // Flash d'animation quand un cube s'allume
  useEffect(() => {
    if (pct > prevPct.current) {
      setFlash(true)
      const t = setTimeout(() => setFlash(false), 400)
      prevPct.current = pct
      return () => clearTimeout(t)
    }
    prevPct.current = pct
  }, [pct])

  // Combien de cubes sont allumés
  const litCubes = Math.round((pct / 100) * TOTAL_CUBES)

  // Couleur des cubes selon le niveau
  const cubeColor =
    pct < 34 ? '#00e5a0' :
    pct < 67 ? '#00e5a0' :
    '#00e5a0'

  const glowColor =
    pct < 34 ? 'rgba(0,229,160,0.5)' :
    pct < 67 ? 'rgba(245,158,11,0.5)' :
    'rgba(232,121,249,0.5)'

  return (

      <div className="lifebar-root">
        <div className="lifebar-top">
          <span className="lifebar-label">Achievements</span>
          <span className="lifebar-pct">{pct}%</span>
        </div>

        <div className="lifebar-cubes">
          {Array.from({ length: TOTAL_CUBES }, (_, i) => {
            const isLit = i < litCubes
            const isJustLit = i === litCubes - 1 && flash
            return (
              <div
                key={i}
                className={`cube${isLit ? ' lit' : ''}${isJustLit ? ' flash-anim' : ''}`}
                style={isLit ? {
                  background: cubeColor,
                  boxShadow: `0 0 5px ${glowColor}, 0 0 2px ${glowColor}`,
                  borderColor: cubeColor,
                } : {}}
              />
            )
          })}
        </div>

        <div className="lifebar-pages">
          {Array.from({ length: 3 }, (_, i) => (
            <span
              key={i}
              className={`page-badge${pagesCompleted[i] ? ' done' : ''}`}
            >
              ✦
            </span>
          ))}
        </div>
      </div>
  )
}