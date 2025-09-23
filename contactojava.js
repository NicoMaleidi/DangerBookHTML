var telefono = document.getElementById("telefono");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");

const form = document.getElementById("contactForm");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    validar();          
});

function validar() {
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    let todoOk = true;

    if (nombre.value.length < 3 || nombre.value.length > 50 || nombre.value.trim() === "") {
        mostrarMensajeError("nombre", "Nombre debe contener entre 3 y 50 caracteres");
        todoOk = false;
    }

    if (correo.value.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
        mostrarMensajeError("correo", "Ingrese un correo válido (ej: usuario@dominio.com)");
        todoOk = false;
    }
    if (correo.value.length > 100) {
        mostrarMensajeError("correo", "Correo no debe superar los 100 caracteres");
        todoOk = false;
    }

    if (telefono.value.length < 7 || telefono.value.length > 12) {
        mostrarMensajeError("telefono", "Teléfono debe tener entre 7 y 12 dígitos numéricos");
        todoOk = false;
    }

    if (mensaje.value.trim().length < 5) {
        mostrarMensajeError("mensaje", "El mensaje debe contener al menos 5 caracteres");
        todoOk = false;
    }

    if (todoOk) {
        alert("¡Mensaje enviado con éxito!");
        form.reset(); 
    }
}

function mostrarMensajeError(idInput, mensaje) {
    let elemento = document.getElementById(idInput).parentElement;
    elemento.lastElementChild.innerHTML = mensaje;
}
