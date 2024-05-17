const express = require('express');
const app = express();
const port = 3000;
const chargePointsRoutes = require('./routes/chargePoints');

app.use('/puntosDeCarga', chargePointsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
