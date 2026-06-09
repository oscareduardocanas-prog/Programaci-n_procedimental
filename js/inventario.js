let nombre = document.getElementById("nombre_producto").value;
let precio = document.getElementById("precio").value;
let codigo = document.getElementById("codigo").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value;
let categoria = document.getElementById("categoria").value;
let unidadMedida = document.getElementById("unidad_medida").value;

function ValidarDatos() {
    if (nombre === "" || precio === "" || codigo === "" || cantidad === "" || marca === "" || categoria === "" || unidadMedida === "")         
        if(nombre != /[a-zA-Z]/){ {
        console.log("El nombre del producto debe contener solo letras.");
    } 
    }
    if ((precio == /[a-zA-Z]/)){
        console.log("El precio  debe ser númerica.");
    }
    if ((cantidad == /[a-zA-Z]/)){
        console.log("La cantidad debe ser númerica.");
    }
    if (codigo == /[a-zA-Z]/){
        console.log("El código debe contener solo números.");
    }
    if (categoria != /[a-zA-Z]/){
        console.log("La categoría debe contener solo letras.");
    }
    if (unidadMedida != /[a-zA-Z]/){
        console.log("La unidad de medida debe contener solo letras.");
    }
    else {
        console.log("Ingrese todos los campos correctamente.");
    }

}