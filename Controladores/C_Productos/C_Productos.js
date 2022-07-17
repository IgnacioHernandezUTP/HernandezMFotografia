export async function ObtenerProductos(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerProductos", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerFotografiaPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/FotografiaPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerProductoPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ProductoPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerPedidoByVentaID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/PedidoPorVentaId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0][0]);
}



export async function ObtenerProdCategoriaPorID(id){
    console.log(id);
    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/CategoriaProdPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export function RegistrarVentaProducto(obj){

    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/RegistrarVentaProducto", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}

export function RegistrarPedidoProducto(obj){

    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/RegistrarPedidoProducto", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}

