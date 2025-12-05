const body = document.getElementById('body');
const divPadre = document.createElement('div');
divPadre.className = 'divPadreTarjetas';
export function mostrarProductos(productos){
    productos.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.innerHTML = `
            <h2>${producto.title}</h2>
            <p>${producto.description}</p>
            <p>${producto.category}</p>
            <img src="${producto.image}" width="50px">
            <p>${producto.price}</p>
        `
        divPadre.appendChild(tarjeta)
    });
    body.appendChild(divPadre);
}
