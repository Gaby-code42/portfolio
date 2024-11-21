import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home' 
import Footer from './components/Footer'
import Header from './components/Header'
import Realisation from './pages/Realisation'
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
