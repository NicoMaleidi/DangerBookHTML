/* Variables */
var telefono = document.getElementById("telefono");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var contrasena = document.getElementById("contrasena");
var rol = document.getElementById("rol");

/* Constantes */
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input"); // Asegúrate de que los div tengan class="form-input"

/* Escuchamos el evento submit del formulario */
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    validar();          
});

/* Función de validación */
function validar() {
    
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    let todoOk = true;

    // Validar Nombre
    if (nombre.value.length < 3 || nombre.value.length > 50 || nombre.value.trim() === "") {
        mostrarMensajeError("nombre", "Nombre debe contener entre 3 y 50 caracteres");
        todoOk = false;
    }

    // Validar Correo
    if (correo.value.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
        mostrarMensajeError("correo", "Correo debe tener un formato válido (usuario@dominio.com)");
        todoOk = false;
    }
    if (correo.value.length > 100) {
        mostrarMensajeError("correo", "Correo NO debe ser mayor a 100 caracteres");
        todoOk = false;
    }

    // Validar Teléfono
    if (telefono.value.length < 7 || telefono.value.length > 12) {
        mostrarMensajeError("telefono", "El número de teléfono debe tener entre 7 y 12 caracteres");
        todoOk = false;
    }

    // Validar Contraseña
    if (contrasena.value.length < 8 || contrasena.value.trim() === "") {
        mostrarMensajeError("contrasena", "La contraseña debe contener un mínimo de 8 caracteres");
        todoOk = false;
    }

    // Validar Rol
    if (rol.value.trim() !== "Usuario" && rol.value.trim() !== "Barbero" && rol.value.trim() !== "Administrador") {
        mostrarMensajeError("rol", "Debe seleccionar Usuario, Barbero o Administrador");
        todoOk = false;
    }

    // Si todo está correcto
    if (todoOk) {
        // Guardar nombre en localStorage para mostrarlo en el navbar
        localStorage.setItem("usuarioNombre", nombre.value.trim());

        alert("¡Registro exitoso!");
        window.location.href = "dangerbook.html";
    }
}

/* Función para mostrar mensajes de error */
function mostrarMensajeError(idInput, mensaje) {
    let elemento = document.getElementById(idInput).parentElement;
    elemento.lastElementChild.innerHTML = mensaje;
}
