var express = require('express');
var empleadosController = require('../controllers/empleadoControllers.js');
var router = express.Router();

router.get('/empleados/:name?', empleadosController.getEmpleados);

module.exports = router;