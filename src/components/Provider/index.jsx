

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const PORTFOLIO_PAGES = [
  { path: '/',            label: 'Accueil',      icon: '🏠' },
  { path: '/about',       label: 'À propos',     icon: '👾' },
  { path: '/realisation', label: 'Réalisations',  icon: '🗺️' },
]

// ─── Context ──────────────────────────────────────────────────────
const ProgressCtx = createContext(null)

export function useProgress() {
  const ctx = useContext(ProgressCtx)
  if (!ctx) throw new Error('useProgress doit être utilisé dans <PortfolioProvider>')
  return ctx
}

// ─── Provider ─────────────────────────────────────────────────────
export function PortfolioProvider({ children }) {
  const location = useLocation()
  const [visited, setVisited]       = useState(() => new Set())
  const [popupVisible, setPopupVisible] = useState(false)
  const completedRef = useRef(false)

  // Marque la route courante comme visitée à chaque navigation
  useEffect(() => {
    const currentPath = location.pathname

    setVisited(prev => {
      // Normalise : "/portfolio" ou "/" → "/"
      const match = PORTFOLIO_PAGES.find(p => p.path === currentPath)
      if (!match || prev.has(currentPath)) return prev

      const next = new Set(prev).add(currentPath)

      if (!completedRef.current && next.size === PORTFOLIO_PAGES.length) {
        completedRef.current = true
        setTimeout(() => setPopupVisible(true), 600)
      }

      return next
    })
  }, [location.pathname])

  const percent = Math.round((visited.size / PORTFOLIO_PAGES.length) * 100)

  return (
    <ProgressCtx.Provider value={{ visited, percent, pages: PORTFOLIO_PAGES, popupVisible, setPopupVisible }}>
      {children}
    </ProgressCtx.Provider>
  )
}