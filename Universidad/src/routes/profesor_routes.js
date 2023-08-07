const express = require('express');
const route = express.Router(); //configuraciones adecuadas para acceder desde un cliente

const profesores = require('../controllers/profesor_controller');

//Aqui debo poner todo mi CRUD de alumnos

route.get('/obtenerProfesores', profesores.getProfesores);

route.post('/agregarProfesor', profesores.addProfesor);

route.patch('/actualizarProfesor',profesores.updateProfesor);

route.delete('/borrarProfesor',profesores.deleteProfesor);

//exponer archivos
module.exports = route