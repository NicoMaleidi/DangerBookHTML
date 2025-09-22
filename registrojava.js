/*Variables*/
var telefono = document.getElementById("telefono");
var nombre=document.getElementById("nombre");
var correo = document.getElementById("correo");
var contrasena = document.getElementById("contrasena");
var rol = document.getElementById("rol");

/*Constantes*/
const form = document.getElementById("form");
const listInputs =document.querySelectorAll(".form-input");


/* al formulario completo agregamos un evento, con esto evitamos el envio y reseteo del formulario*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
   

})

/*funcion validar*/
function validar(){

    /*Cada vez que presiene enviar borrare y vuelvo revisar los mensaje de error*/
    listInputs.forEach((Element) => {
        Element.lastElementChild.innerHTML = "";
        
        });

        let todoOk = true; // Variable que nos dirá si todo está correcto

       
    if(nombre.value.length < 2   || nombre.value.length > 50 ||  nombre.value.trim() =="" ){
       
        mostrarMensajeError("nombre","Nombre debe contener 3 a 20 caracteres");
        todoOk = false;
    }
    /*Correo - Formato*/
    if(correo.value.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
    mostrarMensajeError("correo", "Correo debe tener un formato válido (usuario@dominio.com)");
    todoOk = false;
    }
    /*Correo - Largo*/
    if(correo.value.length > 100){
       
        mostrarMensajeError("correo","Correo NO debe ser mayor a 100 caracteres");
        todoOk = false;
    }
    /*Telefono*/
    if (telefono.value.length < 7 || telefono.value.length > 12) {
        mostrarMensajeError("telefono", "El número de teléfono debe tener entre 8 a 12 caracteres y no puede contener letras.");
        todoOk = false;
    }
    /*Contrasena*/
     if(contrasena.value.length < 8  ||  contrasena.value.trim() =="" ){
       
      mostrarMensajeError("contrasena","La contraseña debe contener un minimo de 8 caracteres");
      todoOk = false;
    }
    /* Rol */
    if (
    rol.value.trim() !== "Usuario" && rol.value.trim() !== "Barbero" && rol.value.trim() !== "Administrador"
    ) {
    mostrarMensajeError("rol", "Debe ingresar si es Usuario, Barbero o Administrador");
    todoOk = false;
    }

    // Si todo está bien
    if(todoOk){
        alert("¡Todos los campos están correctos!");
        form.reset(); // Limpia todos los campos del formulario
    }


}

/* funcion que muestra el mensaje de error en las validaciones */
function mostrarMensajeError(ClaseInput, mensaje){
    let elemeto = document.querySelector(`.${ClaseInput}`);
    elemeto.lastElementChild.innerHTML = mensaje;
}
