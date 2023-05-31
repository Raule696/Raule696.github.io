$(document).ready(function() {

    $("#formulario-mantenedorB").validate({
    rules: {
        cantidad:{
            required: true,
        }
      }, // --> Fin de reglas
    messages: {
        cantidad: {
            required: "Por favor, ingrese un número",
        }
        },
    });
    });