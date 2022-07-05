class Cliente{

    constructor(ClienteID, Cedula, Nombre, Apellido, FechaNacimiento, Correo, Telefono, Movil, Provincia, Ciudad, Calle, NumeroCasa){
        this.ClienteID = ClienteID;
        this.Cedula = Cedula;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.FechaNacimiento = FechaNacimiento;
        this.Correo = Correo;
        this.Telefono = Telefono;
        this.Movil = Movil;
        this.Provincia = Provincia;
        this.Ciudad = Ciudad;
        this.Calle = Calle;
        this.NumeroCasa = NumeroCasa;
    }


}

module.exports = Cliente;