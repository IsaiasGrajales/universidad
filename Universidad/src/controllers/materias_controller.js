const materiasJson = require('../models/materias.json');

const getMaterias = (req, res)=>{
    res.json(materiasJson);
}

const addMateria = (req,res)=>{
    //desestructuracion de datos
    let materias = [];
    const {id, materia, profesor} = req.body;
    let materiaObj = {id,materia,profesor};
    materias.push(materiaObj);

    console.log(materias);
    //const {boleta, name, email, materias} = req.body;
    materiasJson.materias.push(materias);
    res.json(materiasJson);
}

const deleteMateria = (req,res)=>{
    const index = materiasJson.materias.findIndex(materia => materia.id === req.body.id);

    if(index>=0){
        materiasJson.materias.splice(index,1);
        res.json(materiasJson);
    }
    else{
        return res.json({message:"no existe la materia"});
    }
}

const updateMateria = (req,res)=>{
    const index = materiasJson.materias.findIndex(materia => materia.id === req.body.id);

    if(index>=0){
        materiasJson.materias[index] = req.body;
        res.json(materiasJson);
    }
    else{
        return res.json({message:"no existe la materia"});
    }
}

module.exports = {getMaterias, addMateria, deleteMateria, updateMateria};