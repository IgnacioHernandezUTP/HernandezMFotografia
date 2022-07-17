export async function ObtenerFotos(){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/ObtenerFotos", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}

export async function ObtenerFotoCategoriaPorID(id){

    var params = "?id=" + id;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/CategoriaFotoPorId"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}