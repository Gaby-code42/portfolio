import { useEffect, useRef, useState } from 'react'

export const useGamification = () => {
  const [pagesCompleted, setPagesCompleted] = useState([false, false, false])
  const [globalPct, setGlobalPct] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  const observersRef = useRef([])

  // 📌 Enregistrer un footer pour détecter scroll bas de page
  const registerFooter = (pageIndex) => (node) => {
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPagesCompleted((prev) => {
            if (prev[pageIndex]) return prev

            const updated = [...prev]
            updated[pageIndex] = true
            return updated
          })
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(node)
    observersRef.current.push(observer)
  }

  // 📊 Calcul du pourcentage global
  useEffect(() => {
    const completedCount = pagesCompleted.filter(Boolean).length
    const pct = Math.round((completedCount / pagesCompleted.length) * 100)

    setGlobalPct(pct)

    // 🎉 Afficher popup si tout complété
    if (completedCount === pagesCompleted.length) {
      setShowPopup(true)
    }
  }, [pagesCompleted])

  // 🧹 CLEANUP FIX (plus de warning)
  useEffect(() => {
    const observers = observersRef.current

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  const dismissPopup = () => setShowPopup(false)

  return {
    globalPct,
    pagesCompleted,
    showPopup,
    dismissPopup,
    registerFooter,
  }
}