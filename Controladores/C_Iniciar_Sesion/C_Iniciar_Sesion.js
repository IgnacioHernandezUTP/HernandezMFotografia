


export async function ObtenerClientes(obj){


    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/Clientes", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    //console.log(jsonObject[0][0].Correo);
    
    return(jsonObject[0]);
}


export async function IniciarSesion(obj){

    var params = "usr=" + obj.Username;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/CuentaPorUser?"+params, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

   
    console.log(jsonObject[0][0]);
    
    return(jsonObject[0]);
}


export function RegistrarCuenta(obj){

    console.log("controlador obj = " + obj.Cedula);
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/RegistrarCuenta", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify); 
    

}

export function ObtenerClientePorCedula(obj){

    console.log("Obtener");
    console.log(obj);

}

export async function RegistrarCliente(obj){
    
    var objStringify = JSON.stringify(obj);
    console.log(objStringify);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/RegistrarCliente", true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(objStringify);  
    
}