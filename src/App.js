import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Main from './frontend/Main';
import Nosotros from './frontend/Nosotros';
import Prototipo from './frontend/Prototipo';
import Servicios from './frontend/Servicios';
import Contactanos from './frontend/Contactanos';
import Datos from './frontend/Datos';
import TharuImageLogo from "./frontend/imagenes/logo.png";
import TharuImageLogoTaru from "./frontend/imagenes/Tharu.png";

function App() {
  return (
    <Router>
      <div className='body'>
        <div className='header'>
          <img className='log' src={TharuImageLogoTaru} alt='logo' />
          <Link to='/inicio' className='bar'>Inicio</Link>
          <Link to='/nosotros' className='bar'>Nosotros</Link>
          <Link to='/prototipo' className='bar'>Prototipo</Link>
          <Link to='/servicios' className='bar'>Servicios</Link>
          <Link to='/contactanos' className='bar'>Contactanos</Link>
          <img className='log' src={TharuImageLogo} alt='logo' />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/inicio' element={<Main />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/prototipo' element={<Prototipo />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/contactanos' element={<Contactanos />} />
          </Routes>
        </div>
      </div>
      
      <Routes>
        <Route path="/comenzar" element = {<Datos/>}> </Route>

      </Routes>
    </Router>
  );
}

export default App;
