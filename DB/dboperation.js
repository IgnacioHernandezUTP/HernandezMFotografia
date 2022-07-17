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

async function getProductos() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Producto");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getClienteByCedula(cedula) {
    try {
        console.log(cedula);
        let pool = await sql.connect(config);
        let clientes = await pool.request().input('input_parameter',sql.VarChar,cedula).query("SELECT * from Cliente where cedula = @input_parameter");
        return clientes.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getFotoByID(id) {
    try {

        let pool = await sql.connect(config);
        let foto = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from Fotografia where FotografiaID = @input_parameter");
        return foto.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCategoriaProdByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let cat = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from CategoriaProducto where CategoriaIDP = @input_parameter");
        return cat.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getProductByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let prod = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from Producto where ProductoID = @input_parameter");
        return prod.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPedidoByVentaID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let prod = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from PedidoProducto where Venta = @input_parameter");
        return prod.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCuentaByUser(user) {
    try {
        console.log(user);
        let pool = await sql.connect(config);
        let clientes = await pool.request().input('input_parameter',sql.VarChar,user).query("SELECT * from CuentaLogin where Username = @input_parameter");
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

async function RegistrarPedidoProducto(obj) {

    try {
        let pool = await sql.connect(config);
        let PedidoProducto = await pool.request()
            .input('NumeroDeTarjeta', sql.VarChar, obj.NumeroDeTarjeta)
            .input('CodigoDeSeguridad', sql.VarChar, obj.CodigoDeSeguridad)
            .input('FechaExpiracion', sql.VarChar, obj.FechaExpiracion)
            .input('TipoEntrega', sql.VarChar, obj.TipoEntrega)
            .input('Ubicacion', sql.VarChar, obj.Ubicacion)
            .input('Total', sql.Decimal, obj.Total)
            .input('Venta', sql.Int, obj.Venta)
            .input('Cliente', sql.Int, obj.Cliente)
            .output('resultado', sql.Int, 0)
            .execute('registrarPedidoProducto');
        return PedidoProducto.output;
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

async function RegistrarVentaProducto(obj) {
    console.log("obj pasado a dboperations Cuenta = " + obj);
    try {
        let pool = await sql.connect(config);
        let registrarVentaProducto = await pool.request()
            .input('VentaID', sql.Int, obj.VentaID)
            .input('ProductoID', sql.Int, obj.ProductoID)
            .input('Cantidad', sql.Int, obj.Cantidad)
            .output('resultado', sql.Int, 0)
            .execute('registrarVentaProducto');
        return registrarVentaProducto.output;
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
    RegistrarCuenta:RegistrarCuenta,
    getCuentaByUser:getCuentaByUser,
    getProductos:getProductos,
    getFotoByID:getFotoByID,
    getCategoriaProdByID:getCategoriaProdByID,
    getProductByID:getProductByID,
    RegistrarPedidoProducto:RegistrarPedidoProducto,
    RegistrarVentaProducto:RegistrarVentaProducto,
    getPedidoByVentaID:getPedidoByVentaID
}