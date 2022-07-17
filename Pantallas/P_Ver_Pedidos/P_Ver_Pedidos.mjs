import { ObtenerPedidosProducto } from '../../Controladores/C_Ver_Pedidos/C_Ver_Pedidos.js';
import { ObtenerPedidosServicio } from '../../Controladores/C_Ver_Pedidos/C_Ver_Pedidos.js';
import { ObtenerClientePorID } from '../../Controladores/C_Ver_Pedidos/C_Ver_Pedidos.js';
import { ObtenerServicioPorID } from '../../Controladores/C_Ver_Pedidos/C_Ver_Pedidos.js';
import { ObtenerDescripcionPorVentaID } from '../../Controladores/C_Ver_Pedidos/C_Ver_Pedidos.js';
import PedidoServicio from '../../Entidades/E_Pedido_Servicio/PedidoServicio.js';
import PedidoProducto from '../../Entidades/E_Pedido_Producto/PedidoProducto.js';
import E_Cliente from '../../Entidades/E_Cliente/Cliente.js';
import VentaProducto from '../../Entidades/E_Venta_Producto/VentaProducto.js';


let table = document.getElementById("tablaPedidos");



var pedidosProd = ObtenerPedidosProducto();
pedidosProd.then(function(result){

    for (let value of result){
        addElementProducto(table, value)
    }

});

var pedidosServ = ObtenerPedidosServicio();
pedidosServ.then(function(result){

    for (let value of result){
        addElementServicio(table, value)
    }

});



function addElementProducto(appendIn, value){


    

    let tr = document.createElement('tr');
    
    let { NumeroDeOrden, NumeroDeTarjeta, CodigoDeSeguridad, FechaExpiracion, TipoEntrega, Ubicacion, total, Venta, Cliente } = value;



    var pedido = new PedidoProducto();

    pedido.NumeroDeOrden = NumeroDeOrden;
    pedido.NumeroDeTarjeta = NumeroDeTarjeta;
    pedido.CodigoDeSeguridad = CodigoDeSeguridad;
    pedido.FechaExpiracion = FechaExpiracion;
    pedido.TipoEntrega = TipoEntrega;
    pedido.Ubicacion = Ubicacion;
    pedido.total = total;
    pedido.Venta = Venta;
    pedido.Cliente = Cliente;

    var cliente = ObtenerClientePorID(pedido.Cliente);

    
    cliente.then(function(client){

        var comprador = new E_Cliente();

        comprador.Nombre = client[0].Nombre;
        comprador.Apellido = client[0].Apellido;

        var descripcion = ObtenerDescripcionPorVentaID(pedido.Venta);

        descripcion.then(function(valores){

            var stringComprador = comprador.Nombre + " " + comprador.Apellido;
                    tr.innerHTML = `
                            <th scope="row">#</th>
                            <td>${pedido.NumeroDeOrden}</td>
                            <td>Producto</td>
                            <td>${JSON.stringify(valores)}</td>
                            <td>${stringComprador}</td>
                    `;
                    appendIn.appendChild(tr);


        });
        




    });

    

}



function addElementServicio(appendIn, value){

    let tr = document.createElement('tr');
    
    let { NumeroDeOrden, NumeroDeTarjeta, CodigoDeSeguridad, FechaExpiracion, Lugar, Total, Servicio, Cliente, Horario } = value;


    var pedido = new PedidoProducto();

    pedido.NumeroDeOrden = NumeroDeOrden;
    pedido.NumeroDeTarjeta = NumeroDeTarjeta;
    pedido.CodigoDeSeguridad = CodigoDeSeguridad;
    pedido.FechaExpiracion = FechaExpiracion;
    pedido.Lugar = Lugar;
    pedido.Total = Total;
    pedido.Servicio = Servicio;
    pedido.Cliente = Cliente;
    pedido.Horario = Horario;

    var cliente = ObtenerClientePorID(pedido.Cliente);

    
    cliente.then(function(client){

        var comprador = new E_Cliente();

        comprador.Nombre = client[0].Nombre;
        comprador.Apellido = client[0].Apellido;

        var descripcion = ObtenerServicioPorID(pedido.Servicio);

        descripcion.then(function(serv){
            
            var stringComprador = comprador.Nombre + " " + comprador.Apellido;
            var stringDescripcion = serv[0].Nombre + ", Cita: " + pedido.Horario;
                    tr.innerHTML = `
                            <th scope="row">#</th>
                            <td>${pedido.NumeroDeOrden}</td>
                            <td>Servicio</td>
                            <td>${stringDescripcion}</td>
                            <td>${stringComprador}</td>
                    `;
                    appendIn.appendChild(tr);


        });
        




    });

    
}