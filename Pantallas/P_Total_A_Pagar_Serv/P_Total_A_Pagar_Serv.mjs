import { RegistrarPedidoServicio } from '../../Controladores/C_Servicios/C_Servicios.js';


var total = localStorage.getItem('totalVentaServ');

let btnRegistrar = document.getElementById("btnRegistrar");

let totalDisplay = document.getElementById("total");

totalDisplay.innerText = total + "$";

var servicio = localStorage.getItem('ServiciosVendido');

servicio = JSON.parse(servicio);

let li = document.createElement('li');

let listaServs = document.getElementById("listaServicios");



    li.innerHTML += `
    <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check-lg">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
</svg></span><span>${servicio.Nombre} (${servicio.Precio})</span></li>
`;
    

listaServs.appendChild(li);

btnRegistrar.addEventListener("click", Registrar);

function Registrar(){

    

    var pedido = localStorage.getItem('pedidoServ');

    console.log(pedido);

    pedido = JSON.parse(pedido);

    

    RegistrarPedidoServicio(pedido);


    document.location.href = "/ConfirmacionServ";
    console.log(pedido);
    


}