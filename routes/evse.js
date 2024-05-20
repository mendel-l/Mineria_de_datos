const express = require('express');
const router = express.Router();
const evseController = require('../controllers/evseController');

router.get('/phone', evseController.getEvseByPhone);
router.get('/filtro/:column', evseController.filterByColumn);

module.exports = router;
