const express = require('express');
const campanaController = require('../controllers/campanaController');

const router = express.Router();

// Rutas para destinatarios
router.get('/getCampanas', campanaController.getCampanas);
router.patch('/updateCampana/:id', campanaController.updateCampana);
router.put('/deleteCampana:id', campanaController.deleteCampana);
router.post('/createCampana', campanaController.crearCampana)

module.exports = router;
