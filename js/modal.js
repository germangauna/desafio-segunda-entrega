const modalContenedor = document.querySelector(".modal-container")// le ponemos querySelector para que me traiga el primer elemento mque encuentre, el className me traeria mas de un elemento

const abrirCarrito = document.getElementById("open")

const cerrarCarrito = document.getElementById("cerrar")

const modalCarrito = document.querySelector(".modal-carrito")

abrirCarrito.addEventListener("click", () => {
    modalContenedor.classList.toggle("modal-active")
//classListe nos permite leer todas las etiquetas que tiene la clase
//toggle pasa a modo active.
})

cerrarCarrito.addEventListener("click", () => {
    modalContenedor.classList.remove("modal-active")

})
 
modalContenedor.addEventListener("click", () => {
    cerrarCarrito.click()
})    

modalCarrito.addEventListener("click", (e) => {
e.stopPropagation()
})    
