import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const PORTFOLIO_PAGES = [
  { path: '/',            label: 'Accueil',      icon: '🏠', scrollRequired: false },
  { path: '/about',       label: 'À propos',     icon: '👾', scrollRequired: true  },
  { path: '/realisation', label: 'Réalisations', icon: '🗺️', scrollRequired: false },
]

const ProgressCtx = createContext(null)

export function useProgress() {
  const ctx = useContext(ProgressCtx)
  if (!ctx) throw new Error('useProgress doit être utilisé dans <PortfolioProvider>')
  return ctx
}

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

  useEffect(() => {
    const page = PORTFOLIO_PAGES.find(p => p.path === location.pathname)
    if (page && !page.scrollRequired) {
      markVisited(page.path)
    }
  }, [location.pathname, markVisited])

  useEffect(() => {
    const page = PORTFOLIO_PAGES.find(p => p.path === location.pathname)
    if (!page?.scrollRequired) return

    const verifier = () => {
      const hauteurPage = document.body.scrollHeight
      // Mise en page pas encore mesurable (premier rendu, environnement de test).
      if (hauteurPage === 0) return

      const aFaireDefiler = hauteurPage - window.innerHeight
      // Grand écran ou zoom arrière : la page tient entièrement dans la
      // fenêtre. Il n'y a rien à faire défiler, donc tout a déjà été vu —
      // sans ça l'événement `scroll` ne part jamais et la page reste bloquée.
      if (aFaireDefiler <= 0) {
        markVisited(page.path)
        return
      }

      const pct = Math.round((window.scrollY / aFaireDefiler) * 100)
      if (pct >= 100) markVisited(page.path)
    }

    window.addEventListener('scroll', verifier, { passive: true })
    window.addEventListener('resize', verifier)
    // On mesure après la première peinture, quand la hauteur est stabilisée.
    const frame = requestAnimationFrame(verifier)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', verifier)
      window.removeEventListener('resize', verifier)
    }
  }, [location.pathname, markVisited])

  const percent = Math.round((visited.size / PORTFOLIO_PAGES.length) * 100)

  return (
    <ProgressCtx.Provider value={{ visited, percent, pages: PORTFOLIO_PAGES, popupVisible, setPopupVisible }}>
      {children}
    </ProgressCtx.Provider>
  )
}