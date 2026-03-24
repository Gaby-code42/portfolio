import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Realisation from './pages/Realisation'

import Footer from './components/Footer'
import Header from './components/Header'

import useBodyClass from './hooks/bodyBackground'
import { Helmet } from 'react-helmet'
import ScrollToTop from "./hooks/ScrollToTop/index.jsx";

// ✅ FIX IMPORTS
import { useGamification } from './hooks/useGamification/useGamification.jsx'
import { LifeBar } from './components/LifeBar'
import { CongratulationsPopup } from './components/CongratulationsPopup'

import './styleGlobal/app.scss'

const root = createRoot(document.getElementById('root'))

const AppWrapper = () => {
  useBodyClass()

  const {
    globalPct,
    pagesCompleted,
    showPopup,
    dismissPopup,
    registerFooter,
  } = useGamification()

  const location = useLocation()

  const pageIndex =
    location.pathname === '/' ? 0 :
    location.pathname === '/realisation' ? 1 :
    location.pathname === '/about' ? 2 : 0

  return (
    <>
      <LifeBar pct={globalPct} pagesCompleted={pagesCompleted} />

      <CongratulationsPopup
        visible={showPopup}
        onDismiss={dismissPopup}
        onCTA={() => {
          dismissPopup()
          window.open('/cv-raphael-bonacina.pdf', '_blank')
        }}
        ctaLabel="TÉLÉCHARGER MON CV"
        message="Vous avez pris le temps d'explorer chaque page — c'est rare. Si mon profil retient votre attention, je serai heureux d'échanger avec vous."
      />
<ScrollToTop />
      <Header />


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Accueil - Développeur Fullstack</title>
              </Helmet>
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>À propos - Développeur Fullstack</title>
              </Helmet>
              <About />
            </>
          }
        />

        <Route
          path="/realisation"
          element={
            <>
              <Helmet>
                <title>Réalisations - Mes projets</title>
              </Helmet>
              <Realisation />
            </>
          }
        />
      </Routes>

      <Footer footerRef={registerFooter(pageIndex)} />
    </>
  )
}

// ✅ FIX ROUTER (IMPORTANT)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
)