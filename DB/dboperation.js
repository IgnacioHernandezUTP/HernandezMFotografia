var config = require('./dbconfig');
const sql = require('mssql');


async function getCliente() {
    try {
        let pool = await sql.connect(config);
        let clientes = await pool.request().query("SELECT * from Cliente");
        return clientes.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getClienteByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let clienteid = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from Cliente where ClienteID = @input_parameter");
        return clienteid.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getVentaByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let ventaID = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from VentaProducto where VentaID = @input_parameter");
        return ventaID.recordsets;
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

async function getFotos() {
    try {
        let pool = await sql.connect(config);
        let fotos = await pool.request().query("SELECT * from Fotografia");
        return fotos.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCategoriaFotoByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let catFoto = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from CategoriaFoto where CategoriaIDF = @input_parameter");
        return catFoto.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getServicios() {
    try {
        let pool = await sql.connect(config);
        let servicios = await pool.request().query("SELECT * from Servicio");
        return servicios.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPedidosServicio() {
    try {
        let pool = await sql.connect(config);
        let pedidosServicios = await pool.request().query("SELECT * from PedidoServicio");
        return pedidosServicios.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPedidosProducto() {
    try {
        let pool = await sql.connect(config);
        let pedidosProductos = await pool.request().query("SELECT * from PedidoProducto");
        return pedidosProductos.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getServicioByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let servicio = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from Servicio where ServicioID = @input_parameter");
        return servicio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCategoriaServByID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let catServ = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from CategoriaServicio where CategoriaIDS = @input_parameter");
        return catServ.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function RegistrarPedidoServicio(obj) {

    try {
        let pool = await sql.connect(config);
        let PedidoServicio = await pool.request()
            .input('NumeroDeOrden', sql.VarChar, obj.NumeroDeOrden)
            .input('NumeroDeTarjeta', sql.VarChar, obj.NumeroDeTarjeta)
            .input('CodigoDeSeguridad', sql.VarChar, obj.CodigoDeSeguridad)
            .input('FechaExpiracion', sql.VarChar, obj.FechaExpiracion)
            .input('Lugar', sql.VarChar, obj.Lugar)
            .input('Total', sql.Decimal, obj.Total)
            .input('Servicio', sql.Int, obj.Servicio)
            .input('Cliente', sql.Int, obj.Cliente)
            .input('Horario', sql.VarChar, obj.Horario)
            .output('resultado', sql.Int, 0)
            .execute('registrarPedidoServicio');
        return PedidoServicio.output;
    }
    catch (err) {
        console.log(err);
    }

}

async function getClienteByCedula(cedula) {
    try {
        console.log(cedula);
        let pool = await sql.connect(config);
        let cliente = await pool.request().input('input_parameter',sql.VarChar,cedula).query("SELECT * from Cliente where cedula = @input_parameter");
        return cliente.recordsets;
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
        let catProd = await pool.request().input('input_parameter',sql.Int,id).query("SELECT * from CategoriaProducto where CategoriaIDP = @input_parameter");
        return catProd.recordsets;
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

async function getDescripcionByVentaID(id) {
    try {
        console.log(id);
        let pool = await sql.connect(config);
        let descr = await pool.request().input('input_parameter',sql.Int,id).query("select P.Nombre as 'Producto', V.Cantidad from Producto P inner join VentaProducto V on P.ProductoID = V.ProductoID where V.VentaID = @input_parameter");
        return descr.recordsets;
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
        let cuenta = await pool.request().input('input_parameter',sql.VarChar,user).query("SELECT * from CuentaLogin where Username = @input_parameter");
        return cuenta.recordsets;
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
    getPedidoByVentaID:getPedidoByVentaID,
    getServicios:getServicios,
    getServicioByID:getServicioByID,
    getCategoriaServByID:getCategoriaServByID,
    RegistrarPedidoServicio:RegistrarPedidoServicio,
    getFotos:getFotos,
    getCategoriaFotoByID:getCategoriaFotoByID,
    getPedidosServicio:getPedidosServicio,
    getPedidosProducto:getPedidosProducto,
    getClienteByID:getClienteByID,
    getVentaByID:getVentaByID,
    getDescripcionByVentaID:getDescripcionByVentaID
}