// routes/download.js
const express = require('express');
const db = require('../config/db');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const router = express.Router();

router.get('/download-csv', (req, res) => {
  const { startDate, endDate } = req.query;
  const query = `SELECT * FROM MedidasSensores WHERE fecha BETWEEN ? AND ?`;

  db.query(query, [startDate, endDate], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en la consulta');
      return;
    }

    const csvWriter = createObjectCsvWriter({
      path: 'data.csv',
      header: Object.keys(results[0]).map((key) => ({ id: key, title: key })),
    });

    csvWriter.writeRecords(results).then(() => {
      res.download('data.csv', 'MedidasSensores.csv', (err) => {
        if (err) console.error('Error en la descarga:', err);
        fs.unlinkSync('data.csv');
      });
    });
  });
});

module.exports = router;  // Asegúrate de que exportas el router aquí
