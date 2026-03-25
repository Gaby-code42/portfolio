import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'


export const PORTFOLIO_PAGES = [
  { path: '/',            label: 'Accueil',      icon: '🏠', scrollRequired: false },
  { path: '/about',       label: 'À propos',     icon: '👾', scrollRequired: true  },
  { path: '/realisation', label: 'Réalisations', icon: '🗺️', scrollRequired: false },
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
  const [visited, setVisited]           = useState(() => new Set())
  const [popupVisible, setPopupVisible] = useState(false)
  const completedRef                    = useRef(false)

  const markVisited = useCallback((path) => {
    setVisited(prev => {
      if (prev.has(path)) return prev
      const next = new Set(prev).add(path)
      if (!completedRef.current && next.size === PORTFOLIO_PAGES.length) {
        completedRef.current = true
        setTimeout(() => setPopupVisible(true), 600)
      }
      return next
    })
  }, [])

  // ── Pages sans scroll requis : validées à la navigation ──
  useEffect(() => {
    const page = PORTFOLIO_PAGES.find(p => p.path === location.pathname)
    if (page && !page.scrollRequired) {
      markVisited(page.path)
    }
  }, [location.pathname, markVisited])

  // ── Pages avec scroll requis : validées à 100% de scroll ──
  useEffect(() => {
    const page = PORTFOLIO_PAGES.find(p => p.path === location.pathname)
    if (!page?.scrollRequired) return

    const handleScroll = () => {
      const scrollTop  = window.scrollY
      const docHeight  = document.body.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const pct = Math.round((scrollTop / docHeight) * 100)
      if (pct >= 100) markVisited(page.path)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname, markVisited])

  const percent = Math.round((visited.size / PORTFOLIO_PAGES.length) * 100)

  return (
    <ProgressCtx.Provider value={{ visited, percent, pages: PORTFOLIO_PAGES, popupVisible, setPopupVisible }}>
      {children}
    </ProgressCtx.Provider>
  )
}