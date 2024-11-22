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
        <Route path="/" element={<Home />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/realisation/:id" element={<Project/>}/>
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
