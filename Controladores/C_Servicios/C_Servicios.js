export async function ObtenerServicios(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerServicios", false);
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

export async function ObtenerServicioPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ServicioPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerServCategoriaPorID(id){
    console.log(id);
    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/CategoriaServPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export function RegistrarPedidoServicio(obj){

    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/RegistrarPedidoServicio", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}
