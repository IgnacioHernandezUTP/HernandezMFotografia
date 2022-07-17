import { ObtenerPedidoByVentaID } from '../../Controladores/C_Productos/C_Productos.js';

var numeroOrden = localStorage.getItem('NumeroDeOrdenServ');



let displayOrden = document.getElementById("numeroOrden");
let btnInicio = document.getElementById("btnInicio");





displayOrden.innerText = "Numero de Orden: " + numeroOrden;



btnInicio.addEventListener("click", Regresar);

function Regresar(){
    document.location.href = "/MenuPrincipal";
}










