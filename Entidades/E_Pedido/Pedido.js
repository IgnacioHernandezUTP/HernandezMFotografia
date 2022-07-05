class Pedido{

    constructor(NumeroDeOrden, NumeroDeTarjeta, CodigoDeSeguridad, FechaExpiracion, TipoEntrega, TipoVenta, Ubicacion, Total, Compra){

        this.NumeroDeOrden = NumeroDeOrden;
        this.NumeroDeTarjeta = NumeroDeTarjeta;
        this.CodigoDeSeguridad = CodigoDeSeguridad;
        this.FechaExpiracion = FechaExpiracion;
        this.TipoEntrega = TipoEntrega;
        this.TipoVenta = TipoVenta;
        this.Ubicacion = Ubicacion;
        this.Total = Total;
        this.Compra = Compra;
    }


}
module.exports = Pedido;