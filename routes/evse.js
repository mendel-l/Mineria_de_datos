const express = require('express');
const router = express.Router();
const evseController = require('../controllers/evseController');

router.get('/:cadena', evseController.getEvseByCadena);

module.exports = router;
