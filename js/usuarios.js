let nombre = document.getElementById("nombre_completo").value;
let correo = document.getElementById("email").value;
let numero = document.getElementById("numero_celular").value;
let genero = document.getElementById("genero").value;
let fecha = new Date(document.getElementById("fecha_nacimiento").value);
let direccion = document.getElementById("direccion").value;
let password = document.getElementById("contraseña").value;

function ValidarDatos() {
    if (nombre === "" || correo === "" || numero === "" || genero === "" || fecha === "" || direccion === "" || password === "") {
        console.log("Todos los campos son obligatorios.");
    }
    if (!correo.includes("@")) {
        console.log("El correo electrónico no es válido.");
    }
    if (numero.match(/[a-zA-Z]/) || numero.length != 10) {
        console.log("El número de celular debe ser numérico y contener exactamente 10 dígitos.");
    }
    if (genero != /[a-zA-Z]/) {
        console.log("El género debe contener solo letras.");
    }
    if (fecha >= new Date()) {
        console.log("La fecha de nacimiento no puede ser en el futuro.");
    }
    if (direccion != /[a-zA-Z0-9\s]/) {
        console.log("La dirección debe contener solo letras, números y espacios.");
    }
    if (password.length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres.");
    }
    else {
        console.log("Ingrese todos los campos correctamente.");
    }
 
    console.log("hola oscar :D");

}