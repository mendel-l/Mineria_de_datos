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


exports.filterEvseByColumn = (req, res) => {
  const { column, cadena } = req.query;

  // Validar que la columna existe en la tabla 'evse' para evitar inyecciones SQL
  const validColumns = [
    'id', 'charge_point_id', 'phone', 'kwh_capacity', 'extra_details', 'is_always_open',
    'lat', 'lon', 'operator_id', 'operator_id_provider', 'operator_name', 'operator_email',
    'operator_webpage', 'vehicle_type', 'power', 'amperage', 'voltage', 'previous_appointment',
    'time_limit', 'charge_pricing', 'status', 'ts_insert', 'ts_update', 'session_id',
    'product_id', 'evse_address', 'service_station_id', 'station_name', 'enabled', 'evse_id',
    'capabilities', 'floor_level', 'parking_restrictions', 'uid', 'directions', 'images',
    'status_schedule'
  ];

  if (!validColumns.includes(column)) {
    res.status(400).send('Columna inválida');
    return;
  }

  const query = `
    SELECT * 
    FROM evse
  `;
  const values = [column, `%${cadena}%`];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    res.json(results);
  });
};
