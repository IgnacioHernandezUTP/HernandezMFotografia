


export async function RegistrarCliente(obj){

    console.log("Cliente");
    console.log(obj.Email);

    

    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "http://localhost:3000/Clientes", false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);    

    
    
    //clientes.then(function(result){
    //    objClientes = result;
    //});
   
    console.log(jsonObject[0][0].Correo);
}

export function RegistrarCuenta(obj){

    console.log("Cuenta");
    console.log(obj.User);

}

export function ObtenerClientePorCedula(obj){

    console.log("Obtener");
    console.log(obj);

}