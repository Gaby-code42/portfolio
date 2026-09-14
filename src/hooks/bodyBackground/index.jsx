import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Le fond de page est porté par <body> pour couvrir toute la hauteur, y
// compris sous le header et le footer.
const FONDS = {
  '/': 'home-background',
  '/realisation': 'realisation-background',
  '/about': 'realisation-background',
}

const useBodyClass = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const classe = FONDS[pathname]
    document.body.className = classe || ''

    return () => {
      document.body.className = ''
    }
  }, [pathname])
}

export default useBodyClass
