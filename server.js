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

app.get("/MenuPrincipal", function(req, res){
    
    dboperations.getCliente().then(result => {
        console.log(result);
     })
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Menu_Principal/P_Menu_Principal.html"));
});

app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Inicio")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Principal")));

app.listen(3000, function(){
    console.log("Servidor inicializado en el puerto 3000...");
});