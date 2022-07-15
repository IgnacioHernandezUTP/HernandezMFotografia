import Cliente from '../../Entidades/E_Cliente/Cliente.js';
import Cuenta from '../../Entidades/E_Cuenta_Login/CuentaLogin.js';
import { RegistrarCliente } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';
import { RegistrarCuenta } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';
import { ObtenerClientes } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';

let email = document.getElementById("email");
let password = document.getElementById("password");
let usuario = document.getElementById("usuario");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let cedula = document.getElementById("cedula");
let provincia = document.getElementById("provincia");
let ciudad = document.getElementById("ciudad");
let calle = document.getElementById("calle");
let numeroCasa = document.getElementById("casa");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let telefono = document.getElementById("telefono");
let movil = document.getElementById("movil");
let verifyPassword = document.getElementById("verifyPassword");
let submitBtn = document.getElementById("submitBtn");
let emailErrorMsg = document.getElementById('emailErrorMsg');
let passwordErrorMsg = document.getElementById('passwordErrorMsg');
const frmRegistro = document.getElementById("frmRegistro");
 


frmRegistro.addEventListener("submit", (e) => {

    e.preventDefault();

    
    var nuevoCliente = new Cliente();
    var nuevaCuenta = new Cuenta();

    nuevoCliente.Cedula = cedula.value;
    nuevoCliente.Nombre = nombre.value;
    nuevoCliente.Apellido = apellido.value;
    nuevoCliente.Correo = email.value;
    nuevoCliente.Telefono = telefono.value;
    nuevoCliente.Movil = movil.value;
    nuevoCliente.Provincia = provincia.value;
    nuevoCliente.Ciudad = ciudad.value;
    nuevoCliente.Calle = calle.value;
    nuevoCliente.NumeroCasa = numeroCasa.value;
    nuevoCliente.FechaNacimiento = fechaNacimiento.value;
    
    console.log(nuevoCliente);
    var ClienteID = RegistrarCliente(nuevoCliente);
    console.log(ClienteID);
   // xClien.then(function(result){
   //    console.log(result);
    //});

   
        // Save it!
        var cedCliente = ObtenerClientes();
        cedCliente.then(function(result){
        console.log(result);
        nuevaCuenta.Username = usuario.value;
        nuevaCuenta.Password = password.value;
        nuevaCuenta.TipoDeCuenta = "Cliente";
        nuevaCuenta.ClienteID = result[result.length-1].ClienteID;
        console.log(nuevaCuenta);
        RegistrarCuenta(nuevaCuenta);
    });
        

    
    
    console.log(nuevoCliente);
    document.location.href = "/InicioSesion";


    
    

}); 

function displayErrorMsg(type, msg) {
    if(type == "email") {
        emailErrorMsg.style.display = "block"
        emailErrorMsg.innerHTML = msg
        submitBtn.disabled = true
    }
    else {
        passwordErrorMsg.style.display = "block"
        passwordErrorMsg.innerHTML = msg
        submitBtn.disabled = true
    }
}

function hideErrorMsg(type) {
    if(type == "email") {
        emailErrorMsg.style.display = "none"
        emailErrorMsg.innerHTML = ""
        submitBtn.disabled = true
        if(passwordErrorMsg.innerHTML == "")
            submitBtn.disabled = false
    }
    else {
        passwordErrorMsg.style.display = "none"
        passwordErrorMsg.innerHTML = ""
        if(emailErrorMsg.innerHTML == "")
            submitBtn.disabled = false
    }
}

// Validate password upon change
password.addEventListener("change", function() {

    // If password has no value, then it won't be changed and no error will be displayed
    if(password.value.length == 0 && verifyPassword.value.length == 0) hideErrorMsg("password")
    
    // If password has a value, then it will be checked. In this case the passwords don't match
    else if(password.value !== verifyPassword.value) displayErrorMsg("password", "Passwords do not match")
    
    // When the passwords match, we check the length
    else {
        // Check if the password has 8 characters or more
        if(password.value.length >= 8)
            hideErrorMsg("password")
        else
            displayErrorMsg("password", "Password must be at least 8 characters long")
    }
})

verifyPassword.addEventListener("change", function() {
    if(password.value !== verifyPassword.value)
        displayErrorMsg("password", "Passwords do not match")
    else {
        // Check if the password has 8 characters or more
        if(password.value.length >= 8)
            hideErrorMsg("password")
        else
            displayErrorMsg("password", "Password must be at least 8 characters long")
    }
})

// Validate email upon change
email.addEventListener("change", function() {
    // Check if the email is valid using a regular expression (string@string.string)
    if(email.value.match(/^[^@]+@[^@]+\.[^@]+$/))
        hideErrorMsg("email")
    else
        displayErrorMsg("email", "Invalid email")
});






