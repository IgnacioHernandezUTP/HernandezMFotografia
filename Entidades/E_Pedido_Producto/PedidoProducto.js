class PedidoProducto{

    constructor(NumeroDeOrden, NumeroDeTarjeta, CodigoDeSeguridad, FechaExpiracion, TipoEntrega, Ubicacion, Total, Venta, Cliente){

        this.NumeroDeOrden = NumeroDeOrden;
        this.NumeroDeTarjeta = NumeroDeTarjeta;
        this.CodigoDeSeguridad = CodigoDeSeguridad;
        this.FechaExpiracion = FechaExpiracion;
        this.TipoEntrega = TipoEntrega;
        this.Ubicacion = Ubicacion;
        this.Total = Total;
        this.Venta = Venta;
        this.Cliente = Cliente;
    }


}
module.exports = PedidoProducto;