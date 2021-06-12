var Empleado = require('../models/empleadoModel.js');

var controller = {

    getEmpleados: (req, res) => {
        if(req.params.name) {
            this.filterName = {name: req.params.name};
            Empleado.find(this.filterName).exec((err, empleados) => {
                if(!empleados) {
                    return res.status(400).send({
                        status: 'error',
                        message: 'No existen empleados'
                    });
                }

                if(err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al devolver los empleados'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    empleados
                });
            });
        }
        else {
            Empleado.find({}).exec((err, empleados) => {
                if(!empleados) {
                    return res.status(400).send({
                        status: 'error',
                        message: 'No existen empleados'
                    });
                }

                if(err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al devolver los empleados'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    empleados
                });
            });
        }
    }
};

module.exports = controller;