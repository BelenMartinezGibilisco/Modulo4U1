/**import logo from './logo.svg';**/
import React from 'react';
import './App.css';
import {BrouserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import Novedades from './pages/NovedadesPage';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';
import ServiciosPage from './pages/ServiciosPage';



function App() {
  return (
    <div className='App'>
        <Header/>       
        <BrouserRouter>
        <Nav/>
        
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="nosotros" element={<NosotrosPage />}/>
          <Route path="novedades" element={<NovedadesPage />}/>
          <Route path="galeria" element={<GaleriaPage />}/>
          <Route path="contacto" element={<ContactoPage />}/>
          <Route path="servicios" element={<ServiciosPage />}/>
        </Routes>
        </BrouserRouter>
        
        <Footer/>
    </div>
            
  );
}

export default App;
