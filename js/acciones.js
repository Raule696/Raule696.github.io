$(document).ready(function(){
    $("#btnProductos").click(function(){
        $("#content").load("/apps/productos/index.html");
    });
    $("#btnServicios").click(function(){
        $("#content").load("/apps/servicios/index.html");
    });
    $("#btnLogin").click(function(){
        $("#content").load("/apps/usuarios/index.html");
    });
    $("#btnRegistro").click(function(){
        $("#content").load("/apps/usuarios/formulario.html");
    });
});

