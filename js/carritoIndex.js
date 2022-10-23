const carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {
        let producto = productos.find( producto => producto.id == productoId)  
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                         <p>precio: ${producto.precio}</p>
                         <p id= "cantidad ${producto.id}">Cantidad: ${producto.cantidad}</p>
                         <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i>eliminar</button>`
        contenedorCarrito.appendChild(div)

        const botonEliminar = document.getElementById(`eliminar ${producto.id}`);

        botonEliminar.addEventListener('click', () => {
            //evento que queremos que clickee
            carritoIndex(producto.id)          
          Swal.fire({
          title: 'Desea Eliminar Este Producto?',
          text: "Esta accion no la puede revertir!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar!'
          }).then((result) => {
         if (result.isConfirmed) {
         Swal.fire(
         'Eliminado!',
         'Su producto a sido eliminado',
        'success'
   )
 }
}) 
            

        })
    }
    saveLocal()
    renderProductosCarrito()
}

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};

