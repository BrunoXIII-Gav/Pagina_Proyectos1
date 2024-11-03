// config/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',   // Cambia 'localhost' a '127.0.0.1'
  user: 'root',         // Usuario de MySQL
  password: '',         // Contraseña de MySQL (por defecto suele estar vacía en XAMPP)
  database: 'pi_3',     // Nombre de la base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = db;
