const data_url = 'https://fakestoreapi.com/products'

async function productos(data) {
      try{
            const response = await fetch(data);
            const productos = await response.json();
            mostrarProductos(productos);
      } catch(error){
            console.log(error.message)
      }
}


function mostrarProductos(productos){
      productos.forEach(producto => {
            console.log(producto);
      });
}

await productos(data_url);