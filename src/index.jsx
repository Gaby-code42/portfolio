import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Home from './pages/Home'
import About from './pages/About'
import Realisation from './pages/Realisation'
import Services from './pages/Services'

import Header from './components/Header'
import Footer from './components/Footer'
import { LifeBar } from './components/ProgressBar'
import { CongratulationsPopup } from './components/CongratPopUP'
import { PortfolioProvider, useProgress } from './components/Provider'

import useBodyClass from './hooks/bodyBackground'
import useScrollToTop from './hooks/scrollToTop'
import './styleGlobal/app.scss'

const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

function PopupConnector() {
  const { popupVisible, setPopupVisible } = useProgress()

  return (
    <CongratulationsPopup
      visible={popupVisible}
      onDismiss={() => setPopupVisible(false)}
    />
  )
}

const AppWrapper = () => {
  useBodyClass()
  useScrollToTop()

  return (
    <PortfolioProvider>
      <Header />
      <LifeBar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Raphaël Bonacina — Développeur web full-stack React / Next.js</title>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/realisation"
            element={
              <>
                <Helmet>
                  <title>Réalisations — Raphaël Bonacina</title>
                </Helmet>
                <Realisation />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <title>Services — Création de sites web sur mesure | Raphaël Bonacina</title>
                  <meta
                    name="description"
                    content="Création de sites vitrines, sites avec réservation en ligne et optimisation de sites existants. Développeur web freelance React / Next.js. Devis gratuit."
                  />
                </Helmet>
                <Services />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>À propos — Raphaël Bonacina</title>
                </Helmet>
                <About />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
      <PopupConnector />
    </PortfolioProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter {...routerConfig} basename={process.env.PUBLIC_URL}>
        <AppWrapper />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
