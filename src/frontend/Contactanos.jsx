// Contactanos.jsx
import React from 'react';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-tarjeta">
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>

        <form className="contacto-formulario">
          <label>
            Nombre
            <input type="text" placeholder="Ingresa tu nombre" required />
          </label>
          <label>
            Correo Electrónico
            <input type="email" placeholder="Ingresa tu correo" required />
          </label>
          <label>
            Mensaje
            <textarea placeholder="Escribe tu mensaje" required></textarea>
          </label>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
      {/* La imagen se añade como fondo mediante CSS, por lo que no hay un div adicional aquí */}
    </div>
  );
};

export default Contactanos;
