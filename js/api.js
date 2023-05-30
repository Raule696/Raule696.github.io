// Crear funcion ready
$(document).ready(function () {
    $("#btnRopa").click(function () {
        $.get('https://fakestoreapi.com/products',
            function (data) {

                $('#tabla-ropa').empty();

                $.each(data, function (i, item) {

                    var fila = '';
                    fila += '<tr>';
                    fila += '    <td>' + item.id + '</td>';
                    fila += '    <td>' + item.title + '</td>';
                    fila += '    <td><img style="height: 50px; width: 50px" src="' + item.image + '"></td>';
                    fila +='    <td>' + item.price + '</td>';
                    fila += '</tr>';
                    $('#tabla-ropa').append(fila);
                });
            }
        )
    })
})

// Puedes probar otras APIs en http://jsonplaceholder.typicode.com