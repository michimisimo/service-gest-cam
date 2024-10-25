const express = require('express');
const campanaController = require('../controllers/campanaController');

const router = express.Router();

// Rutas para destinatarios
router.get('/getCampanas', campanaController.getCampanas);

module.exports = router;
