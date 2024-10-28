// TarjetaIntegrante.jsx
import React from 'react';
import './Nosotros.css';

const TarjetaIntegrante = ({ nombre, rol, imagen, descripcion }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta-imagen-container">
        <img src={imagen} alt={`${nombre}`} className="tarjeta-imagen" />
      </div>
      <h3 className="tarjeta-nombre">{nombre}</h3>
      <p className="tarjeta-rol">{rol}</p>
      <p className="tarjeta-descripcion">{descripcion}</p>
    </div>
  );
};

export default TarjetaIntegrante;
