// Prototipo.jsx
import React from 'react';
import './Prototipo.css';

const Prototipo = () => {
  return (
    <div className="prototipo">
      {/* Primera Sección de Fondo */}
      <header className="proyecto-header">
        <h1>Proyecto: Monitoreo de la calidad del aire y el suelo</h1>
        <p>
          Somos un grupo de estudiantes de Ingeniería Informática de la Universidad Peruana Cayetano Heredia.
          Durante este periodo, desarrollamos un módulo de parametrización de la calidad del aire y del suelo
          para evaluar el impacto ambiental en el campus de Santa María.
        </p>
      </header>

      {/* Contenido Principal */}
      <section className="justificacion">
        <h2>Justificación de la propuesta</h2>
        <p>
          La propuesta surge como respuesta a la necesidad de monitorear parámetros ambientales en el campus de Santa María del Mar, UPCH,
          para evaluar el impacto del crecimiento urbano y la expansión industrial en la calidad del aire y del suelo. Este sistema busca adaptarse 
          a las amenazas ambientales para asegurar un espacio académico seguro y saludable.
        </p>
      </section>

      <section className="objetivos">
        <h2>Objetivos</h2>
        <h3>Objetivo General</h3>
        <p>Diseñar e implementar un dispositivo de monitoreo ambiental en el campus de Santa María.</p>
        <h3>Objetivos Específicos</h3>
        <ul>
          <li>Monitorear la calidad del aire y la variabilidad climática.</li>
          <li>Monitorear condiciones del suelo para evaluar su idoneidad.</li>
          <li>Calibrar sensores de bajo costo en el campus.</li>
          <li>Diseñar un módulo que utilice energía renovable.</li>
          <li>Desarrollar una interfaz de usuario para visualización en tiempo real.</li>
        </ul>
      </section>

      {/* Segunda Sección de Fondo */}
      <div className="fondo-seccion">
        <h2>ODS - Objetivos de Desarrollo Sostenible</h2>
        <p>
          Este proyecto se alinea con los ODS 7: “Energía Asequible y No Contaminante” y ODS 11: “Ciudades y Comunidades sostenibles”,
          promoviendo el uso de energía renovable y el desarrollo de una comunidad universitaria sostenible.
        </p>
        <div className="ods-imagenes">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sustainable_Development_Goal-es-11.jpg" alt="ODS 11" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Sustainable_Development_Goal-es-07.jpg" alt="ODS 7" />
        </div>
      </div>
      
      {/* Última Sección */}
      <section className="sensores">
        <h2>Sensores Utilizados</h2>
        <p>
          Los sensores empleados incluyen dispositivos de medición de temperatura, humedad, radiación solar, y calidad del aire.
          Estos sensores recopilan datos en tiempo real para un análisis ambiental preciso y continuo.
        </p>
      </section>
    </div>
  );
};

export default Prototipo;
