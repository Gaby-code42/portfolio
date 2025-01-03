import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home' 
import About from './pages/About';
import Realisation from './pages/Realisation'
import Project from './pages/Project';
import Footer from './components/Footer'
import Header from './components/Header'
import useBodyClass from './hooks/bodyBackground';
import { Helmet } from 'react-helmet';
import './styleGlobal/app.scss'





const root = createRoot(document.getElementById('root'))



const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

const AppWrapper = () => {
  useBodyClass();  // Utilisation du hook personnalisé

  return (
    <>
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
        <Route
          path="/realisation/:id"
          element={
            <>
              <Helmet>
                <title>Détail du projet</title>
              </Helmet>
              <Project />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

root.render(
  <React.StrictMode>

    <BrowserRouter {...routerConfig} basename="/portfolio">    
        <AppWrapper/>
    </BrowserRouter>
  </React.StrictMode>
  
)
