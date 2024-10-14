
import './Main.css';
import React from 'react';

import TharuImageBuho from "./imagenes/Rectangle 2.png"
import { useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate()  
  return (

    <div className='body'>

        <div className='contenedorPrincipal'>
            <div className='title'>
                <h1 id="ti">THARU</h1>
                <h2 id='secti'>MODULO INTEGRAL DE MONITOREO DIGITAL De LA CALIDAD DEL AIRE Y SUELO</h2>
            </div>
            <div className='container'>
                <img
                    className='buho' 
                    src={TharuImageBuho} 
                    alt="buhox" />
            </div>
            <div className='imagen_cont'>
                <button className='boton' onClick={() => navigate("/comenzar")}>
                    Comenzar
                </button>
            </div>
            
        </div>
    </div>
    
    
  );
}

export default Main;
