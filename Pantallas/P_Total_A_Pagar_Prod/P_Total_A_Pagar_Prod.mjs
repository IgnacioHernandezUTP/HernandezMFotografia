import { RegistrarVentaProducto } from '../../Controladores/C_Productos/C_Productos.js';
import { RegistrarPedidoProducto } from '../../Controladores/C_Productos/C_Productos.js';


var total = localStorage.getItem('totalVentaProd');

let btnRegistrar = document.getElementById("btnRegistrar");

let totalDisplay = document.getElementById("total");

totalDisplay.innerText = total;

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