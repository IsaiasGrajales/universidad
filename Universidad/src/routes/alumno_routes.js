const express = require('express');
const route = express.Router(); //configuraciones adecuadas para acceder desde un cliente

const controller = require('../controllers/alumno_controller');

//Aqui debo poner todo mi CRUD de alumnos

route.get('/obtenerAlumnos', controller.getAlumnos);

route.post('/agregarAlumno', controller.addAlumno);

route.patch('/actualizarAlumno',controller.updateAlumno);

route.delete('/borrarAlumno/:id',controller.deleteAlumno);

//exponer archivos
module.exports = route