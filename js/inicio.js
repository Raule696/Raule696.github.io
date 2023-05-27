// objeto.metodo(json)

$(document).ready(function() {
    
    $("#formulario-inicio").validate({
      rules: {
        usuario: {
            required: true,
        },
        contraseña: {
            required: true,
        },
    },
    messages: {
        usuario: {
            required: "El usuario es un campo requerido",
        },
        contraseña: {
            required: "Su contraseña es un campo requerido",
        },    
    },
});
});