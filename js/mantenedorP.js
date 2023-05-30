c// objeto.metodo(json)

$(document).ready(function() {

$("#formulario-mantenedorP").validate({
  rules: {
    id: {
        required: true,
    },
    nombre: {
        required: true,
    },
    descripcion: {
      required: true,
    },
    precio: {
        required: true,
    },
    descuentoSub: {
      required: true,
    },
    descuentoOff: {
      required: true,
    },
  }, // --> Fin de reglas
  messages: {
    id: {
        required: "Su Id es un campo requerido",
    },
    nombre: {
        required: "Su nombre es un campo requerido",
    },
    descripcion: {
        required: "La descripción es un campo requerido",
      },
    precio: {
        required: "LEl precio es un campo requerido",
    },
    descuentoSub: {
      required: "El descuentoSub es una campo obligatorio",
    },
    descuentoOff: {
      required: "El descuentoOff es una campo obligatorio",
    },
  },
});
});