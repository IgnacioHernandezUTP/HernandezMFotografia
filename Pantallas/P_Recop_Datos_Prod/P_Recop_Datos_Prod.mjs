import PedidoProducto from '../../Entidades/E_Pedido_Producto/PedidoProducto.js';
import VentaProducto from '../../Entidades/E_Venta_Producto/VentaProducto.js';
let rbtnSucursal = document.getElementById("rbtnSucursal");

let rbtnDelivery = document.getElementById("rbtnDelivery");

let divProvincia = document.getElementById("divProvincia");
let divCiudad = document.getElementById("divCiudad");
let divCalle = document.getElementById("divCalle");
let divNumeroCasa = document.getElementById("divNumeroCasa");
let divSucursal = document.getElementById("divSucursales");

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let telefono = document.getElementById("telefono");
let sucursal = document.getElementById("sucursal");
let provincia = document.getElementById("provincia");
let ciudad = document.getElementById("ciudad");
let calle = document.getElementById("calle");
let numeroCasa = document.getElementById("numeroCasa");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let fechaExpiracion = document.getElementById("fechaExpiracion");
let codigoSeguridad = document.getElementById("codigoSeguridad");

var ventaID = localStorage.getItem('ventaID');

var usuarioID = localStorage.getItem('usuario');

var total = localStorage.getItem('totalVentaProd');

let btnContinuar = document.getElementById("Continuar");

var tipoEntrega = "";

rbtnSucursal.addEventListener('click', OcultarDelivery);

rbtnDelivery.addEventListener('click', OcultarSucursal);

btnContinuar.addEventListener('click', EnviarPedido);

divProvincia.style.display = 'none';
divCiudad.style.display = 'none';
divCalle.style.display = 'none';
divNumeroCasa.style.display = 'none';
divSucursal.style.display = 'none';

function OcultarDelivery(){
    divProvincia.style.display = 'none';
    divCiudad.style.display = 'none';
    divCalle.style.display = 'none';
    divNumeroCasa.style.display = 'none';
    divSucursal.style.display = 'flex';

    tipoEntrega = "Sucursal";
}

function OcultarSucursal(){
    divProvincia.style.display = 'flex';
    divCiudad.style.display = 'flex';
    divCalle.style.display = 'flex';
    divNumeroCasa.style.display = 'flex';
    divSucursal.style.display = 'none';

    tipoEntrega = "Delivery";
}

function EnviarPedido(){

var pedido = new PedidoProducto();
pedido.NumeroDeTarjeta = numeroTarjeta.value;
pedido.CodigoDeSeguridad = codigoSeguridad.value;
pedido.FechaExpiracion = fechaExpiracion.value;
pedido.TipoEntrega = tipoEntrega;

if(tipoEntrega == "Sucursal"){
    pedido.Ubicacion = sucursal.value;
}else{
    var ubicacion = provincia.value + ", " + ciudad.value + ", " + calle.value + ", #" + numeroCasa.value;
    pedido.Ubicacion = ubicacion;
}

pedido.Venta = ventaID;
pedido.Cliente = usuarioID;
pedido.Total = total;

localStorage.setItem('pedidoProd', JSON.stringify(pedido));




document.location.href = "/TotalProd";


}