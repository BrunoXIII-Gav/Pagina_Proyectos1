// src/components/Servicios.jsx
import React, { useState } from 'react';
import './Servicios.css';

const Servicios = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDownload = () => {
    if (!startDate || !endDate) {
      alert('Por favor, selecciona ambos intervalos de fecha.');
      return;
    }

    // Llamada a la API en el backend
    fetch(`http://localhost:5000/api/download-csv?startDate=${startDate}&endDate=${endDate}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Error en la descarga');
      })
      .then((blob) => {
        // Crear un enlace de descarga
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'MedidasSensores.csv';
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error al descargar el archivo CSV:', error);
      });
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
