// server.js
const express = require('express');
const cors = require('cors');
const downloadRoutes = require('./routes/download');  // Asegúrate de que esto está correcto

const app = express();
app.use(cors());
app.use('/api', downloadRoutes);  // Aquí utilizamos downloadRoutes como middleware

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});
