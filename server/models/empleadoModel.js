var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = Schema({
    name: String,
    contractTypeName: String,
    roleId: Number,
    roleName: String,
    roleDescription: String,
    hourlySalary: Number,
    monthlySalary: Number,
    annuallySalary: Number
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);