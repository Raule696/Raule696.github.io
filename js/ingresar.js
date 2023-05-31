// objeto.metodo(json)

$(document).ready(function() {

$("#formulario-ingresar").validate({
    rules: {
        username: {
          required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    }, // --> Fin de reglas
    messages: {
        username: {
            required: "El usuario es un campo requerido",
        },
        password: {
            required: "La contraseña es una campo obligatorio",
            minlength: "Mínimo 5 caracteres",
        },
    },    
});
});