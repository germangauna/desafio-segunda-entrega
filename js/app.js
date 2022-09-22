const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor");//referencia al main.

    productos.forEach(producto => {//recorre todos los productos
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                           <img src="${producto.img}" class="card-img-top" alt="...">
                           <div class="card-body">
                           <h5 class="card-title">${producto.nombre}</h5>
                           <p class="card-text">descripcion:${producto.desc}</p>
                           <p class="card-text">precio: $ ${producto.precio}</p>
                           <button class="btn btn-primary" id=boton${producto.id}>comprar</button>
                           </div>
                        </div>`

        contenedorProductos.appendChild(div)// crea una nuevo hijo dentro del nuevo padre
        
        const boton = document.getElementById(`boton${producto.id}`);

        boton.addEventListener('click', () => {
            //evento que queremos que clickee
           carritoIndex(producto.id)
            alert(`se agrego el producto ${producto.nombre}`)

        })
    });
}

mostrarProductos(productos)