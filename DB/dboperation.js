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

var result = getCliente();
console.log(result);

module.exports = {
    getCliente: getCliente
}