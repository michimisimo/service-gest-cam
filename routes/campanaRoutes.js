const express = require('express');
const campanaController = require('../controllers/campanaController');

const router = express.Router();

// Rutas para destinatarios
router.get('/getCampanas', campanaController.getCampanas);
router.patch('/updateCampana/:id', campanaController.updateCampana);
router.put('/deleteCampana:id', campanaController.deleteCampana);
router.post('/createCampana', campanaController.crearCampana)
router.post('/createEmailCampana', campanaController.crearEmailCampana);
router.get('/getEmailCampana/:id', campanaController.getEmailCampana);
router.patch('/updateEstadoCampana/:id', campanaController.updateEstadoCampana);

module.exports = router;
