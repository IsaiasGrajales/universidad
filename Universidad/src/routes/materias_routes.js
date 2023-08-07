const express = require('express');
const route = express.Router(); //configuraciones adecuadas para acceder desde un cliente

const materias = require('../controllers/materias_controller');

//Aqui debo poner todo mi CRUD de alumnos

route.get('/obtenerMaterias', materias.getMaterias);

route.post('/agregarMateria', materias.addMateria);

route.patch('/actualizarMateria',materias.updateMateria);

route.delete('/borrarMateria',materias.deleteMateria);

//exponer archivos
module.exports = route