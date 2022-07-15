var config = require('./dbconfig');
const sql = require('mssql');


async function getCliente() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Cliente");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getClienteByCedula(cedula) {
    try {
        let pool = await sql.connect(config);
        let clientes = await pool.request().input('input_parameter',sql.VarChar,cedula).query("SELECT * from Cliente where cedula = @input_parameter");
        return clientes.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function RegistrarCliente(obj) {

    try {
        let pool = await sql.connect(config);
        let registrarCliente = await pool.request()
            .input('ClienteID', sql.Int, obj.ClienteID)
            .input('Cedula', sql.VarChar, obj.Cedula)
            .input('Nombre', sql.VarChar, obj.Nombre)
            .input('Apellido', sql.VarChar, obj.Apellido)
            .input('FechaNacimiento', sql.VarChar, obj.FechaNacimiento)
            .input('Correo', sql.VarChar, obj.Correo)
            .input('Telefono', sql.VarChar, obj.Telefono)
            .input('Movil', sql.VarChar, obj.Movil)
            .input('Provincia', sql.VarChar, obj.Provincia)
            .input('Ciudad', sql.VarChar, obj.Ciudad)
            .input('Calle', sql.VarChar, obj.Calle)
            .input('NumeroCasa', sql.VarChar, obj.NumeroCasa)
            .output('resultado', sql.Int, 0)
            .execute('registrarCliente');
        return registrarCliente.output;
    }
    catch (err) {
        console.log(err);
    }

}

async function RegistrarCuenta(obj) {
    console.log("obj pasado a dboperations Cuenta = " + obj);
    try {
        let pool = await sql.connect(config);
        let registrarCuenta = await pool.request()
            .input('ClienteID', sql.Int, obj.ClienteID)
            .input('Password', sql.VarChar, obj.Password)
            .input('Username', sql.VarChar, obj.Username)
            .input('TipoDeCuenta', sql.VarChar, obj.TipoDeCuenta)
            .output('resultado', sql.Int, 0)
            .execute('registrarCuenta');
        return registrarCuenta.output;
    }
    catch (err) {
        console.log(err);
    }

}

var result = getCliente();
console.log(result);

module.exports = {
    getCliente: getCliente,
    getClienteByCedula:getClienteByCedula,
    RegistrarCliente:RegistrarCliente,
    RegistrarCuenta:RegistrarCuenta
}