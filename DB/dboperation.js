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

var result = getCliente();
console.log(result);

module.exports = {
    getCliente: getCliente,
    getClienteByCedula:getClienteByCedula
}