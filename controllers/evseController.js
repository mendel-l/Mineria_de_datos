const connection = require('../config/database');

const validColumns = [
  'id', 'charge_point_id', 'phone', 'kwh_capacity', 'extra_details', 'is_always_open',
  'lat', 'lon', 'operator_id', 'operator_id_provider', 'operator_name', 'operator_email',
  'operator_webpage', 'vehicle_type', 'power', 'amperage', 'voltage', 'previous_appointment',
  'time_limit', 'charge_pricing', 'status', 'ts_insert', 'ts_update', 'session_id',
  'product_id', 'evse_address', 'service_station_id', 'station_name', 'enabled',
  'evse_id', 'capabilities', 'floor_level', 'parking_restrictions', 'uid', 'directions',
  'images', 'status_schedule'
];

exports.getEvseByPhone = (req, res) => {
  const query = `
    SELECT phone, 'not_null' AS status
    FROM evse 
    WHERE phone IS NOT NULL
  `;
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los datos:', err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    console.log('Resultados:', results);
    res.json(results);
  });
};

exports.filterByColumn = (req, res) => {
  const column = req.params.column;
  
  if (!validColumns.includes(column)) {
    return res.status(400).send('Invalid column name');
  }

  const query = `SELECT id, ??, status FROM evse`;
  const values = [column];

  console.log('Consulta SQL:', query);
  console.log('Valores:', values);

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al obtener los datos:', err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    console.log('Resultados:', results);
    res.json(results);
  });
};
