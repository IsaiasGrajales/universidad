let email;
let password;
let info = [];
let arrayUsers=[];
let arrayPasswords=[];
//const formatEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
//const formatPassword = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,16})$/g;

getData();

function getData(){
    fetch('./datos/usuarios.json')
    .then(response=>response.json())
    .then(data=>{
        info = data.usuarios;
        console.log(info);
        console.log("\n");
        arrayUsers = getUser(info);
        arrayPasswords = getPassword(info);
        console.log(arrayUsers);
        console.log("\n");
        console.log(arrayPasswords);
    })
    .catch(error=>{
        console.error("error al cargar el archivo json: ",error)
    });
}

//Funcion para el boton de ingreso al menu principal
function getInto(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let emptyFields = validateEmptyFields(email,password);

    if(emptyFields==true){
        error('Es necesario llenar todos los campos');
        cleanFields();
    }
    else{
        console.log("campos llenos correctos");
        let validateUP = validateUserAndPassword(email, password);

        if(validateUP){
            console.log("Acceso concedido, bienvenido");
            window.location.replace('./menu_principal.html');
        }
        else{
            error("Usuario o contraseña incorrectos");
            cleanFields();
        }
    }
}

//Funcion para validar usuario y contraseña
function validateUserAndPassword(user, password){
    let userOK = validateUser(user);
    let passwordOK = validatePassword(password);
    if((userOK)&&(passwordOK)){
        return true;
    }
    else{
        return false;
    }
}

//Funcion que valida el usuario
function validateUser(user){
    let userOK = false;
    arrayUsers.forEach(usu=>{
        if(usu==user){
            userOK = true;
        }
    });
    return userOK;
}

//Funcion para validar password
function validatePassword(password){
    let passwordOK = false;
    arrayPasswords.forEach(pass=>{
        if(pass==password){
            passwordOK = true;
        }
    });
    return passwordOK;
}

//esta funcion analiza si los campos estan vacios o no
function validateEmptyFields(email, password){

    if((email=="")&&(password=="")){
        return true;
    }
    else if((email=="")&&(password!="")){
        return true;
    }
    else if((email!="")&&(password=="")){
        return true;
    }
    else{
        return false;
    }
}

function cleanFields(){
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

function error(message){
    let error = document.getElementById('error');
    error.style.display = "block";
    error.innerText = message;
}

function errorNotVisible(){
    let error = document.getElementById('error');
    error.style.display = "none";
}

//Funcion que obtiene todos los usuarios del arreglo json
function getUser(array){
    let users = [];
    array.forEach(user => {
        users.push(user.user);
    });
    return users;
}

function getPassword(array){
    let passwords=[];
    array.forEach(pass=>{
        passwords.push(pass.password);
    })
    return passwords;
}