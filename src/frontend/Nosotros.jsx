// Nosotros.jsx
import React from 'react';
import TarjetaIntegrante from './TarjetaIntegrante';
import './Nosotros.css';

const Nosotros = () => {
  const integrantes = [
    {
      nombre: 'Juan Pérez',
      rol: 'Desarrollador Frontend',
      imagen: '/imagenes/juan.png',
      descripcion: 'Especialista en interfaces y experiencias de usuario.'
    },
    {
      nombre: 'María García',
      rol: 'Desarrolladora Backend',
      imagen: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/c/cb/latest/20220530212008/Mario_Mario_Party_Superstars.png',
      descripcion: 'Encargada de la arquitectura del servidor y las APIs.'
    },
    // Añade más integrantes aquí
  ];

  return (
    <div className="nosotros">
      <header className="nosotros-header">
        <h1>Conoce al equipo</h1>
        <p className="nosotros-descripcion">
          Somos un grupo de profesionales dedicados a brindar las mejores soluciones digitales.
          Nuestro equipo está comprometido con la innovación y la excelencia en cada proyecto.
        </p>
      </header>
      
      <div className="nosotros-tarjetas">
        {integrantes.map((integrante, index) => (
          <TarjetaIntegrante
            key={index}
            nombre={integrante.nombre}
            rol={integrante.rol}
            imagen={integrante.imagen}
            descripcion={integrante.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
