const alumnosJson = require('../models/alumnos.json')

const getAlumnos = (req, res)=>{
    res.json(alumnosJson);
}

const addAlumno = (req,res)=>{
    //desestructuracion de datos
    let materias = [];
    let {id,boleta, name, email, materia, calificacion, profesor, horario} = req.body;
    let materiaObj = {materia,calificacion,profesor,horario};
    materias.push(materiaObj);
    boleta = parseInt(boleta);
    let alumno = {id, boleta, name, email, materias};

    console.log(alumno);
    alumnosJson.alumnos.push(alumno);
    res.json(alumnosJson);
}

const deleteAlumno = (req,res)=>{
    const id = req.params.id;

    let alumnosFilter = alumnosJson.alumnos.filter(alumno => alumno.id !== id);
    console.log(alumnosFilter);

    if(alumnosFilter.length>=0){
        return json({status:true, alumnosFilter: alumnosFilter});
    }
    else{
        return json({status:false});
    }
}

const updateAlumno = (req,res)=>{
    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta);

    if(index>=0){
        alumnosJson.alumnos[index] = req.body;
        res.json(alumnosJson);
    }
    else{
        return res.json({message:"no existe el alumno"});
    }
}

module.exports = {getAlumnos,addAlumno,deleteAlumno, updateAlumno}