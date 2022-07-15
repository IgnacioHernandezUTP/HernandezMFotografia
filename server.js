//jshint esversion:6
var Db  = require(__dirname + '\\DB\\dboperation');
const dboperations = require(__dirname + '\\DB\\dboperation');
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    
    dboperations.getCliente().then(result => {
        console.log(result);
     })
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Inicio/P_inicio.html"));
});

app.get("/Clientes", function(req, res){
    
    dboperations.getCliente().then(result => {
        res.json(result);
     })
    
    
});
app.get("/ClientePorCedula", function(req, res){
    
    dboperations.getClienteByCedula(req.query.ced).then(result => {
        res.json(result);
     })
    
    
});

app.get("/CuentaPorUser", function(req, res){
    
    dboperations.getCuentaByUser(req.query.usr).then(result => {
        res.json(result);
     })
    
    
});

app.get("/MenuPrincipal", function(req, res){
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Menu_Principal/P_Menu_Principal.html"));
});

app.get("/MenuGerente", function(req, res){
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Menu_Gerente/P_Menu_Gerente.html"));
});

app.get("/MenuMarketing", function(req, res){
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Menu_Marketing/P_Menu_Marketing.html"));
});

app.get("/InicioSesion", function(req, res){
    
    dboperations.getCliente().then(result => {
        console.log(result);
     })
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Inicio_Sesion/P_Inicio_Sesion.html"));
});

app.get("/Registrar", function(req, res){
    
    dboperations.getCliente().then(result => {
        console.log(result);
     })
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Registro/P_Registro.html"));
});

app.use(bodyParser.text({ type: "text/plain" }));

app.post("/RegistrarCliente",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.RegistrarCliente(objJson).then(result => {
        console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.post("/RegistrarCuenta",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.RegistrarCuenta(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Inicio")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Registro")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Principal")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Marketing")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Gerente")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Inicio_Sesion")));
app.use("/", express.static(__dirname));

app.listen(3000, function(){
    console.log("Servidor inicializado en el puerto 3000...");
});