// Crear funcion ready
$(document).ready(function () {
    $.get('https://fakestoreapi.com/products', // API donde se obtienen los datos
        function(data){
            $('#product-item').empty();

            $.each(data, function(i, item) { // Recorrer las filas devueltas por la API
                // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila
                var fila = 
                    `
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    <img src="${item.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <div class="lead text-Light fw-bold">Descripción</div>
                        <p class="card-description">${item.description}</p>
                        <b>Stock 5 unidades</b>                        
                    <div class="lead table-danger" >
                        <span class="sale-offer-price fw-bold">
                            $${item.price}
                        </span>
                        <p></p>
                            <div class="d-flex justify-content-between aligin-items-center" >
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        Comprar
                                    </button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
                
                fila += '</tr>';

                $('#product-item').append(fila);   
            });
    });
  });  // Cierre del ready

// Puedes probar otras APIs en http://jsonplaceholder.typicode.com