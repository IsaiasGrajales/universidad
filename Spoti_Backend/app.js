const express = require('express'); //importar dependencias versiones ES4-5
//import { Express } from 'express'; //importancion de ES6

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/login', function (req, res) {
    console.log(req.query);
    const {user} = req.query;
    res.json({message: "hola" + user});
})

app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
});