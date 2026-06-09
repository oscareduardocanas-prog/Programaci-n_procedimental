let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let pedido = document.getElementById("pedido").value;
let nombre = document.getElementById("nombre").value;
let referencias = document.getElementById("referencias").value;
let metodoPago = document.getElementById("metodo_pago").value;

function ValidarDatos() {
    if (direccion === "" || telefono === "" || email === "" || pedido === "" || nombre === "" || referencias === "" || metodoPago === "") {
        console.log("Todos los campos son obligatorios.");
    }
    if (telefono == /[a-zA-Z]/) {
        console.log("El teléfono debe ser numérico.");
    }
    if (!email.includes("@")) {
        console.log("El correo electrónico no es válido.");
    }
    if (pedido != /[a-zA-Z]/) {
        console.log("El pedido debe contener solo letras.");
    }
    if (nombre != /[a-zA-Z]/) {
        console.log("El nombre debe contener solo letras.");
    }
    if (metodoPago != /[a-zA-Z]/) {
        console.log("El método de pago debe contener solo letras.");
    }
    else {
        console.log("Ingrese todos los campos correctamente.");
    }
}   

