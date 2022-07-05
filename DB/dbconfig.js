const config = {
    user :'usrnotificador',
    password :'Contra123',
    server:'127.0.0.1',
    database:'HernandezM',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'localhost',
        trustServerCertificate: true
    },
    port : 1433
}

module.exports = config; 