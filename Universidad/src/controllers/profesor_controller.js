const profesoresJson = require('../models/profesores.json');

const getProfesores = (req, res)=>{
    res.json(profesoresJson);
}

const addProfesor = (req,res)=>{
    //desestructuracion de datos
    let profesores = [];
    const {id, nombre, apellido, carrera, numEmpleado} = req.body;
    let profesorObj = {id,nombre, apellido, carrera, numEmpleado};
    profesores.push(profesorObj);

    console.log(profesores);
    profesoresJson.profesores.push(profesores);
    res.json(profesoresJson);
}

const deleteProfesor = (req,res)=>{
    const index = profesoresJson.profesores.findIndex(profesor => profesor.id === req.body.id);

    if(index>=0){
        profesoresJson.profesores.splice(index,1);
        res.json(profesoresJson);
    }
    else{
        return res.json({message:"no existe el dato del profesor"});
    }
}

const updateProfesor = (req,res)=>{
    const index = profesoresJson.profesores.findIndex(profesor => profesor.id === req.body.id);

    if(index>=0){
        profesoresJson.profesores[index] = req.body;
        res.json(profesoresJson);
    }
    else{
        return res.json({message:"no existe el dato del profesor"});
    }
}

module.exports = {getProfesores, addProfesor, deleteProfesor, updateProfesor};