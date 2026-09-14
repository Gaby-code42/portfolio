import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router ne touche pas au défilement : sans ça, on quitte le bas des
// « Réalisations » et on arrive au milieu de « À propos ».
const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

export default useScrollToTop
