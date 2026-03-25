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

  // ← RETRAIT : plus besoin de scrollPct, popupVisible, useEffect scroll

  return (
    // ← AJOUT : PortfolioProvider englobe tout (doit être DANS BrowserRouter
    //           pour avoir accès à useLocation)
    <PortfolioProvider>
      <Header />   {/* ← Header contient déjà <LifeBar /> — voir Header.jsx */}
      <LifeBar />
      <Routes>
        <Route path="/" element={<><Helmet><title>Accueil - Développeur Fullstack</title></Helmet><Home /></>} />
        <Route path="/about" element={<><Helmet><title>À propos - Développeur Fullstack</title></Helmet><About /></>} />
        <Route path="/realisation" element={<><Helmet><title>Réalisations - Mes projets</title></Helmet><Realisation /></>} />
      </Routes>

      <Footer />

      {/* ← AJOUT : Popup géré par le context — plus besoin de passer visible/onDismiss manuellement */}
      <PopupConnector />
    </PortfolioProvider>
  )
}

// Petit composant pour brancher le popup sur le context
// (évite de faire remonter la logique dans AppWrapper)



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

// ============================================================
//  Header.jsx — ajouter <LifeBar /> quelque part dans le header
//
//  import { LifeBar } from '../ProgressBar/LifeBar'
//
//  export default function Header() {
//    return (
//      <header>
//        <nav>...</nav>
//        <LifeBar />       ← une seule ligne à ajouter
//      </header>
//    )
//  }
// ============================================================