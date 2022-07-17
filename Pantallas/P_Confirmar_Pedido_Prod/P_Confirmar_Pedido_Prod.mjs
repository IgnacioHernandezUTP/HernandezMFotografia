import { ObtenerPedidoByVentaID } from '../../Controladores/C_Productos/C_Productos.js';

var ventaID = localStorage.getItem('ventaID');

var pedido = ObtenerPedidoByVentaID(ventaID);
var numeroOrden;
let displayOrden = document.getElementById("numeroOrden");
let btnInicio = document.getElementById("btnInicio");


pedido.then(function(result){

    numeroOrden = result.NumeroDeOrden;
    displayOrden.innerText = "Numero de Orden: " + numeroOrden;

});

btnInicio.addEventListener("click", Regresar);

function Regresar(){
    document.location.href = "/MenuPrincipal";
}










