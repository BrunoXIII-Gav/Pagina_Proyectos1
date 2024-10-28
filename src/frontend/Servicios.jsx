// Servicios.jsx
import React, { useState } from 'react';
import './Servicios.css';

const Servicios = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDownload = () => {
    alert(`Se descargará la información del ${startDate} al ${endDate} en formato CSV.`);
  };

  return (
    <div className="servicios-contenedor">
      <h2>Descargar Datos de Sensores</h2>
      <p>Seleccione el intervalo de fechas para descargar los datos recopilados.</p>
      
      <div className="servicios-formulario">
        <label>
          Desde:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Hasta:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        
        <button onClick={handleDownload}>Descargar CSV</button>
      </div>
    </div>
  );
};

export default Servicios;
