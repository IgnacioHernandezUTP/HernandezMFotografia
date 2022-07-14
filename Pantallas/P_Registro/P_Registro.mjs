import Cliente from '../../Entidades/E_Cliente/Cliente.js';
import Cuenta from '../../Entidades/E_Cuenta_Login/CuentaLogin.js';
import { RegistrarCliente } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';
import { RegistrarCuenta } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';
import { ObtenerClientePorCedula } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';

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

    console.log("dsaf"); 
    const nuevoCliente = new Cliente();
    const nuevaCuenta = new Cuenta();

    nuevoCliente.Cedula = cedula.textContent;
    nuevoCliente.Nombre = nombre.textContent;
    nuevoCliente.Apellido = apellido.textContent;
    nuevoCliente.Email = email.textContent;
    nuevoCliente.Telefono = telefono.textContent;
    nuevoCliente.Movil = movil.textContent;
    nuevoCliente.Provincia = provincia.textContent;
    nuevoCliente.Ciudad = ciudad.textContent;
    nuevoCliente.Calle = calle.textContent;
    nuevoCliente.NumeroCasa = numeroCasa.textContent;
    nuevoCliente.FechaNacimiento = fechaNacimiento.textContent;
    

    RegistrarCliente(nuevoCliente);
    
    //nuevoCliente = ObtenerClientePorCedula(nuevoCliente.Cedula);

    nuevaCuenta.Username = usuario;
    nuevaCuenta.Password = password;
    nuevaCuenta.TipoDeCuenta = "Cliente";
    nuevaCuenta.ClienteID = nuevoCliente.ClienteID;

    RegistrarCuenta(nuevaCuenta)

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






