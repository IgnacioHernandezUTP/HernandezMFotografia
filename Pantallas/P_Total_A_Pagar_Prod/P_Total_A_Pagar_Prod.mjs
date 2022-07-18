import { RegistrarVentaProducto } from '../../Controladores/C_Productos/C_Productos.js';
import { RegistrarPedidoProducto } from '../../Controladores/C_Productos/C_Productos.js';


var total = localStorage.getItem('totalVentaProd');

let btnRegistrar = document.getElementById("btnRegistrar");

let totalDisplay = document.getElementById("total");

let listaProds = document.getElementById("listaProductos");

let li = document.createElement('li');

var productos = localStorage.getItem('productos');

productos = JSON.parse(productos);

productos.forEach(function(result){

    li.innerHTML += `
    <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check-lg">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
</svg></span><span>${result.Nombre} (${result.Precio})</span></li>
`;
    
});

listaProds.appendChild(li);

totalDisplay.innerText = total + "$";

btnRegistrar.addEventListener("click", Registrar);

function Registrar(){

    var ventas = localStorage.getItem('ventaProductos');

    var pedido = localStorage.getItem('pedidoProd');

    pedido = JSON.parse(pedido);

    ventas = JSON.parse(ventas);

    ventas.forEach(function (venta){
        RegistrarVentaProducto(venta);
    });

    RegistrarPedidoProducto(pedido);


    document.location.href = "/Confirmacion";
    console.log(pedido);
    


}