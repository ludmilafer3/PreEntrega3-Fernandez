const listaProductos = [
    {id: 1, nombres: "pelota", precio: 1000, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_814346-MLU72542363030_112023-F.webp" },
    {id: 2, nombres: "pileta", precio: 700, imagen: "https://images.fravega.com/f1000/7d76272ddbeef4b6714b5f2b0f07bb15.jpg" },
    {id: 3, nombres: "hamaca", precio: 850, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_979006-MLA70535925820_072023-F.webp" },
    {id: 4, nombres: "silla", precio: 1500, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_882006-MLA54981177428_042023-F.webp"},
    {id: 5, nombres: "sillon", precio: 2000, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_940728-MLU72825479079_112023-F.webp"}
];


localStorage.setItem("listaProductos", JSON.stringify(listaProductos));

let contenedor = document.getElementById("contenedor");
contenedor.className = "contenedor"

const productos = () => {
    let productosJson = localStorage.getItem("listaProductos");
    let productos = JSON.parse(productosJson);

    productos.forEach(producto => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-2" style="width: 18rem;">
            <img src=${producto.imagen} class="card-img-top img" alt="...">
                <div class="card-body card">
                    <h5 class="card-title">${producto.nombres}</h5>
                    <p class="card-text">${producto.precio}</p>
                    <button id="comprar${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
        </div>`;

        contenedor.append(div)

});
}

productos();


/* const arrreglo = []
const encuetraProducto = (id) => {
    let productosJson = localStorage.getItem("listaProductos");
    let productos = JSON.parse(productosJson);

    let producto = productos.find((item) => item.id === id);
    arrreglo.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));
}

let id = Number(prompt("ingrese el id del producto que deseas"));

encuetraProducto(id); */