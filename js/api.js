// Crear funcion ready
$(document).ready(function () {
    $.get('https://fakestoreapi.com/products', // API donde se obtienen los datos
        function(data){
            $('#product-item').empty();

            $.each(data, function(i, item) { // Recorrer las filas devueltas por la API
                // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila
                var fila = 
                    `
                    <div class="card">
                        <img src="${item.image}" class="imagen">
                        <div class="contenido_carta">          
                            <p>
                                ${item.price}                                                               
                            </p>
                            <p>
                                ${item.title}
                            </p>
                                ${item.description}           
                            </p>        
                        </div>
                    </div> 
                    `;
                
                fila += '</tr>';

                $('#product-item').append(fila);   
            });
    });
  });  // Cierre del ready

// Puedes probar otras APIs en http://jsonplaceholder.typicode.com