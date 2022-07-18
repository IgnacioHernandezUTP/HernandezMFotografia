export function ActualizarProducto(obj){

    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/ActualizarProducto", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}

export async function ObtenerProductos(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerProductos", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerServicios(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerServicios", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export function ActualizarServicio(obj){

    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/ActualizarServicio", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}