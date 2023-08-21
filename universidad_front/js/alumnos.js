let alumnos = [];

function fetchMaterias(){
    fetch('http://localhost:3000/obtenerMaterias')
    .then(response=>response.json())
    .then(data=>{
        let opciones = data.materias.map(item=>`<option value="${item.materia}">${item.materia}</option>`)
        document.getElementById("materias-opcion").innerHTML = opciones;
    })
    .catch(error=>console.log(error));
}

fetchMaterias();

fetch('http://localhost:3000/obtenerAlumnos') //consultar la ruta
.then(response => response.json()) //promesa si responde entonces me devuelve un dato en formato json
.then(data =>{ //una vez convertido me entrega ciertos datos
    alumnos = data.alumnos;
    //console.log(alumnos);
    showAlumnos(alumnos);
})
.catch(error => console.log(error));

function showAlumnos(array){
    const tabla = document.getElementById('listAlumnos');
    let tableContent;

    array.forEach((item, index)=>{
        tableContent += `<tr>
            <th scope="row" class="table-background">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.boleta}</td>
            <td><button type="button" class="btn btn-danger" onclick="eliminarAlumno('${item.id}')">Eliminar</button></td>
        </tr>`;
    });

    tabla.innerHTML = tableContent;
}

function showStudents(){
    document.getElementById('tableStudent').style.display = "block";
    document.getElementById('container-student').style.display = "none";
}

function showform(){
    document.getElementById('tableStudent').style.display = "none";
    document.getElementById('container-student').style.display = "block";
}

function eliminarAlumno(id){
    fetch(`http://localhost:3000/borrarAlumno/:${id}`, {
        method: "DELETE"
    }).then(response=>response.json())
    .then(data=>{
        if(data.status){
            document.getElementById('listAlumnos').innerHTML = '';
            showAlumnos(data.alumnosFilter);
            alert("Alumno eliminado");
        }
        else{
            alert("Alumno no eliminado");
        }
    })
    .catch(error=>console.log(error))
}