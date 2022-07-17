export async function ObtenerPedidosProducto(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerPedidosProducto", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerPedidosServicio(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerPedidosServicio", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerClientePorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ClientePorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerVentaPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/VentaPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerDescripcionPorVentaID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerDescripcion"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerProductos(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerProductos", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerServicioPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ServicioPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}
