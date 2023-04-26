// objeto.metodo(json)

$(document).ready(function() {
    
    $("#formulario-registro").validate({
      rules: {
        rut: {
            required: true,
        },
        nombres: {
            required: true,
        },
        apellidos: {
            required: true,
        },
        correo: {
          required: true,
          email: true,
        },
        direccion: {
            required: true,
        },
        password: {
          required: true,
          minlength: 5,
        },
        password2: {
          required: true,
          equalTo: "#password",
        },
      }, // --> Fin de reglas
      messages: {
        rut: {
            required: "El rut es un campo requerido",
        },
        nombres: {
            required: "Sus nombres es un campo requerido",
        },
        apellidos: {
            required: "Sus apellidos es un campo requerido",
        },
        correo: {
            required: "El correo es un campo requerido",
            email: "El correo no cumple el formato de un correo",
          },
        direccion: {
            required: "La dirección es un campo requerido",
        },
        password: {
          required: "La contraseña es una campo obligatorio",
          minlength: "Mínimo 5 caracteres",
        },
        password2: {
          required: "Repita la contraseña anterior",
          minlength: "Mínimo 5 caracteres",
          equalTo: "Debe ser igual al campo contraseña",
        },
      },
    });
  });
  