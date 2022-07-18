//jshint esversion:6
var Db  = require(__dirname + '\\DB\\dboperation');
const dboperations = require(__dirname + '\\DB\\dboperation');
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({ type: "text/plain" }));
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

app.get("/Modificar", function(req, res){
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Modificar/P_Modificar.html"));
});

app.get("/ModificarServicios", function(req, res){
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Modificar_Servicios/P_Modificar_Servicios.html"));
});


app.get("/InicioSesion", function(req, res){
    
    dboperations.getCliente().then(result => {
        console.log(result);
     })
    
    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Inicio_Sesion/P_Inicio_Sesion.html"));
});

app.get("/Registrar", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Registro/P_Registro.html"));
});

app.get("/RecopDatosProd", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Recop_Datos_Prod/P_Recop_Datos_Prod.html"));
});

app.get("/RecopDatosServ", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Recop_Datos_Servicios/P_Recop_Datos_Servicios.html"));
});

app.get("/TotalProd", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Total_A_Pagar_Prod/P_Total_A_Pagar_Prod.html"));
});

app.get("/TotalServ", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Total_A_Pagar_Serv/P_Total_A_Pagar_Serv.html"));
});

app.get("/Confirmacion", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Confirmar_Pedido_Prod/P_Confirmar_Pedido_Prod.html"));
});

app.get("/ConfirmacionServ", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Confirmar_Pedido_Serv/P_Confirmar_Pedido_Serv.html"));
});

app.get("/Productos", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Productos/P_Productos.html"));
});

app.get("/Servicios", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Servicios/P_Servicios.html"));
});

app.get("/Galeria", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Galeria/P_Galeria.html"));
});

app.get("/VerPedidos", function(req, res){
    

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Ver_Pedidos/P_Ver_Pedidos.html"));
});

app.get("/ManejarInventario", function(req, res){

    res.sendFile(path.resolve(__dirname + "/Pantallas/P_Manejar_Inventario/P_Manejar_Inventario.html"));
});



app.get("/ObtenerServicios", function(req, res){
    
    dboperations.getServicios().then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ObtenerPedidosProducto", function(req, res){
    
    dboperations.getPedidosProducto().then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ObtenerPedidosServicio", function(req, res){
    
    dboperations.getPedidosServicio().then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ServicioPorId", function(req, res){
    
    dboperations.getServicioByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ClientePorId", function(req, res){
    
    dboperations.getClienteByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/VentaPorId", function(req, res){
    
    dboperations.getVentaByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/CategoriaServPorId", function(req, res){
    
    dboperations.getCategoriaServByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.post("/RegistrarPedidoServicio",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.RegistrarPedidoServicio(objJson).then(result => {
    
       res.json(result);
    })

});

app.get("/ObtenerProductos", function(req, res){
    
    dboperations.getProductos().then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ObtenerFotos", function(req, res){
    
    dboperations.getFotos().then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ProductoPorId", function(req, res){
    
    dboperations.getProductByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/ObtenerDescripcion", function(req, res){
    
    dboperations.getDescripcionByVentaID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});



app.get("/PedidoPorVentaId", function(req, res){
    
    dboperations.getPedidoByVentaID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/FotografiaPorId", function(req, res){
    
    dboperations.getFotoByID(req.query.id).then(result => {

        res.json(result);
     })
    
    
});

app.get("/CategoriaProdPorId", function(req, res){
    
    dboperations.getCategoriaProdByID(req.query.id).then(result => {
        
        res.json(result);
     })
    
    
});

app.get("/CategoriaFotoPorId", function(req, res){
    
    dboperations.getCategoriaFotoByID(req.query.id).then(result => {
        console.log(result);
        res.json(result);
     })
    
    
});


//Funciones


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

app.post("/RegistrarPedidoProducto",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.RegistrarPedidoProducto(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.post("/RegistrarVentaProducto",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.RegistrarVentaProducto(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.post("/ActualizarInventario",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.UpdateInventory(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.post("/ActualizarProducto",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.UpdateProduct(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

app.post("/ActualizarServicio",  function(req, res){

    var obj = req.body;
    var objJson = JSON.parse(obj);
    dboperations.UpdateServicio(objJson).then(result => {
        //console.log("resultado de sp = " + result.resultado);
        res.json(result);
     })

});

//rutas estaticas
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Inicio")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Registro")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Principal")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Marketing")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Menu_Gerente")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Inicio_Sesion")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Productos")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Recop_Datos_Prod")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Total_A_Pagar_Prod")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Confirmar_Pedido_Prod")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Servicios")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Recop_Datos_Servicios")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Total_A_Pagar_Serv")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Confirmar_Pedido_Serv")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Galeria")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Ver_Pedidos")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Manejar_Inventario")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Modificar")));
app.use(express.static(path.resolve(__dirname + "/Pantallas/P_Modificar_Servicios")));








app.use("/", express.static(__dirname));

app.listen(3000, function(){
    console.log("Servidor inicializado en el puerto 3000...");
});