const productos = [
    {
        id: 1,
        nombre: "paisaje",
        desc: "grafica",
        precio: 5000,
        img: "./multimedia/pintura1.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Mona Lisa",
        desc: "grafica",
        precio: 15000,
        img: "./multimedia/pintura2.jpg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Bailarina",
        desc: "grafica",
        precio: 10000,
        img: "./multimedia/pintura3.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Grito",
        desc: "grafica",
        precio: 14000,
        img: "./multimedia/pintura4.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Colibri",
        desc: "grafica",
        precio: 9000,
        img: "./multimedia/pintura5.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Paris",
        desc: "grafica",
        precio: 8000,
        img: "./multimedia/pintura6.jpg",
        cantidad: 1
    },

];

localStore.setItem("productos", JSON.stringify(productos));