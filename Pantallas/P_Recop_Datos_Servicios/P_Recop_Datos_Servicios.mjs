import PedidoServicio from '../../Entidades/E_Pedido_Servicio/PedidoServicio.js';


let rbtnEstudio = document.getElementById("rbtnEstudio");

let rbtnExterior = document.getElementById("rbtnExterior");

let divProvincia = document.getElementById("divProvincia");
let divCiudad = document.getElementById("divCiudad");
let divCalle = document.getElementById("divCalle");
let divNumeroCasa = document.getElementById("divNumeroCasa");


let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");
let telefono = document.getElementById("telefono");
let provincia = document.getElementById("provincia");
let ciudad = document.getElementById("ciudad");
let calle = document.getElementById("calle");
let numeroCasa = document.getElementById("numeroCasa");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let fechaExpiracion = document.getElementById("fechaExpiracion");
let codigoSeguridad = document.getElementById("codigoSeguridad");

var NumeroDeOrdenServ = localStorage.getItem('NumeroDeOrdenServ');

var usuarioID = localStorage.getItem('usuario');

var total = localStorage.getItem('totalVentaServ');

var serv = localStorage.getItem('ServiciosVendido');

serv = JSON.parse(serv);

let btnContinuar = document.getElementById("Continuar");

var tipoEntrega = "";

rbtnEstudio.addEventListener('click', OcultarDelivery);

rbtnExterior.addEventListener('click', OcultarSucursal);

btnContinuar.addEventListener('click', EnviarPedido);

divProvincia.style.display = 'none';
divCiudad.style.display = 'none';
divCalle.style.display = 'none';
divNumeroCasa.style.display = 'none';


function OcultarDelivery(){
    divProvincia.style.display = 'none';
    divCiudad.style.display = 'none';
    divCalle.style.display = 'none';
    divNumeroCasa.style.display = 'none';

    tipoEntrega = "Estudio";
}

function OcultarSucursal(){
    divProvincia.style.display = 'flex';
    divCiudad.style.display = 'flex';
    divCalle.style.display = 'flex';
    divNumeroCasa.style.display = 'flex';


    tipoEntrega = "Exterior";
}

function EnviarPedido(){

var pedido = new PedidoServicio();
pedido.NumeroDeTarjeta = numeroTarjeta.value;
pedido.CodigoDeSeguridad = codigoSeguridad.value;
pedido.FechaExpiracion = fechaExpiracion.value;


if(tipoEntrega == "Estudio"){
    pedido.Lugar = "Estudio";
}else{
    var lugar = provincia.value + ", " + ciudad.value + ", " + calle.value + ", #" + numeroCasa.value;
    pedido.Lugar = lugar;
}


pedido.Cliente = usuarioID;
pedido.Total = total;
pedido.NumeroDeOrden = NumeroDeOrdenServ;
pedido.Servicio = serv.ServicioID;

var horario = fecha.value + ", " + hora.value;

pedido.Horario = horario;


localStorage.setItem('pedidoServ', JSON.stringify(pedido));




document.location.href = "/TotalServ";


}