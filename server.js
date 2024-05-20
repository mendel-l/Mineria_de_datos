const express = require('express');
const app = express();
const port = 3000;
const chargePointsRoutes = require('./routes/chargePoints');
const evseRoutes = require('./routes/evse');


app.use('/puntosDeCarga', chargePointsRoutes);
app.use('/evse', evseRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
