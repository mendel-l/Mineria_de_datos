const express = require('express');
const router = express.Router();
const chargePointsController = require('../controllers/chargePointsController');

router.get('/', chargePointsController.getChargePoints);
router.get('/tiposDeCarga', chargePointsController.getChargePointTypes);

module.exports = router;
