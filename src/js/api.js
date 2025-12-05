const data_url = 'https://fakestoreapi.com/products'
import { mostrarProductos } from "./productos.js";

async function productos(data) {
      try{
            const response = await fetch(data);
            const productos = await response.json();
            mostrarProductos(productos);
            console.log('HOLA')
      } catch(error){
            console.log(error.message)
      }
}

await productos(data_url);
