class PedidoServicio{

    constructor(NumeroDeOrden, NumeroDeTarjeta, CodigoDeSeguridad, FechaExpiracion, Lugar, Total, Servicio, Cliente){

        this.NumeroDeOrden = NumeroDeOrden;
        this.NumeroDeTarjeta = NumeroDeTarjeta;
        this.CodigoDeSeguridad = CodigoDeSeguridad;
        this.FechaExpiracion = FechaExpiracion;
        this.Lugar = Lugar;
        this.Total = Total;
        this.Servicio = Servicio;
        this.Cliente = Cliente;
    }


}
module.exports = PedidoServicio;