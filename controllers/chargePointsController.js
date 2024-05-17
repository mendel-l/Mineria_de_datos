const connection = require('../config/database');

exports.getChargePoints = (req, res) => {
  const ciudad = req.query.ciudad || 'Madrid';
  connection.query('SELECT * FROM charge_point WHERE city = ?', [ciudad], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    res.json(results);
  });
};

exports.getChargePointTypes = (req, res) => {
  const ciudad = req.query.ciudad || 'Madrid';
  connection.query('SELECT city, type, COUNT(*) as cantidad FROM charge_point WHERE city = ? GROUP BY city, type ORDER BY cantidad DESC', [ciudad], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    res.json(results);
  });
};
