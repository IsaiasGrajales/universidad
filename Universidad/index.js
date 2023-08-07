const express = require('express') //invocar a la libreria express -> indica que utilizara express (o requiere)
const alumnosRoutes = require('./src/routes/alumno_routes.js'); //importar la ruta de los alumnos
const profesoresRoutes = require('./src/routes/profesor_routes.js'); //importar la ruta de los profesores
const materiasRoutes = require('./src/routes/materias_routes.js'); //importar la ruta de las materias
const cors = require('cors');

const bodyParser = require('body-parser')
const app = express() //crea una instancia de express

app.use(bodyParser.urlencoded({ extended: false })) //dependencias o configuraciones para leer archivos json
app.use(bodyParser.json())
app.use(cors());

//rutas del alumno
app.use(alumnosRoutes);
//rutas de las materias
app.use(materiasRoutes);
//rutas de los profesores
app.use(profesoresRoutes);

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})