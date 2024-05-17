const connection = require('../config/database');

exports.getEvseByCadena = (req, res) => {
  const cadena = req.params.cadena;
  const query = `
    SELECT phone 
    FROM evse 
  `;
  const values = [`%${cadena}%`];
  
  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    res.json(results);
  });
};
