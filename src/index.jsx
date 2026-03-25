// ============================================================
//  App.jsx — intégration complète du système de gamification
//  Diff vs ton code actuel : marqué avec // ← AJOUT / RETRAIT
// ============================================================
import { useProgress } from './components/Provider/index'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Realisation from './pages/Realisation'

import Footer from './components/Footer'
import Header from './components/Header'

import useBodyClass from './hooks/bodyBackground'
import { Helmet } from 'react-helmet'
import { LifeBar } from './components/ProgressBar/index'
// puis dans le JSX :

import './styleGlobal/app.scss'

// ← AJOUT : les deux imports du système de gamification
import { PortfolioProvider } from './components/Provider/index'
import { CongratulationsPopup } from './components/CongratPopUP/index'

const root = createRoot(document.getElementById('root'))

const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

const AppWrapper = () => {
  useBodyClass()



  return (


    <PortfolioProvider>
      <Header />  
      <LifeBar />
      <Routes>
        <Route path="/" element={<><Helmet><title>Accueil - Développeur Fullstack</title></Helmet><Home /></>} />
        <Route path="/realisation" element={<><Helmet><title>Réalisations - Mes projets</title></Helmet><Realisation /></>} />
        <Route path="/about" element={<><Helmet><title>À propos - Développeur Fullstack</title></Helmet><About /></>} />
      </Routes>

      <Footer />

      <PopupConnector />
    </PortfolioProvider>
  )
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

root.render(
  <React.StrictMode>
    <BrowserRouter {...routerConfig} basename="/portfolio">
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
)

