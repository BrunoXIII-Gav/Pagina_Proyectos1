// Nosotros.jsx
import React from 'react';
import TarjetaIntegrante from './TarjetaIntegrante';
import './Nosotros.css';

const Nosotros = () => {
  const integrantes = [
    {
      nombre: 'Camilo',
      rol: 'Coordinador de IT',
      imagen: '/imagenes/as.png',
      descripcion: 'Encargado de la integracion de sensores.'
    },
    {
      nombre: 'Bruno',
      rol: 'Desarrollador de Software',
      imagen: '/imagenes/as.png',
      descripcion: 'Encardago del desarrollo del softaware .'
    },
    {
      nombre: 'Jhunior',
      rol: 'Coordinador de Hardware',
      imagen: '/imagenes/as.png',
      descripcion: 'Encargado de la implementacion del hardwar.'
    },
    {
      nombre: 'Stephany',
      rol: 'Coordinadora de Modelado 3D',
      imagen: '/imagenes/as.png',
      descripcion: 'Encargada de la creacion de modelos 3D.'
    },
    {
      nombre: 'Jose',
      rol: 'Coordinador de desarrollo Web',
      imagen: '/imagenes/as.png',
      descripcion: 'Encargado de la cracion de la pagina web y el backend.'
    },

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
