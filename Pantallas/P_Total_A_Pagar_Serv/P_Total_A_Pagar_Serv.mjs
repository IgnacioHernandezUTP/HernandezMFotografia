import { RegistrarPedidoServicio } from '../../Controladores/C_Servicios/C_Servicios.js';


var total = localStorage.getItem('totalVentaServ');

let btnRegistrar = document.getElementById("btnRegistrar");

let totalDisplay = document.getElementById("total");

totalDisplay.innerText = total + "$";

btnRegistrar.addEventListener("click", Registrar);

function Registrar(){

    

    var pedido = localStorage.getItem('pedidoServ');

    console.log(pedido);

    pedido = JSON.parse(pedido);

    

    RegistrarPedidoServicio(pedido);


    document.location.href = "/ConfirmacionServ";
    console.log(pedido);
    


}