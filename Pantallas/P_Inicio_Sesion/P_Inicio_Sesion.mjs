import Cuenta from '../../Entidades/E_Cuenta_Login/CuentaLogin.js';
import { IniciarSesion } from '../../Controladores/C_Iniciar_Sesion/C_Iniciar_Sesion.js';
let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");
let errorMsg = document.getElementById('errorMsg');

frmInicioSesion.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log("fds")
    var nuevaCuenta = new Cuenta();
    nuevaCuenta.Username = username.value;
    nuevaCuenta.Password = password.value;

    var response = IniciarSesion(nuevaCuenta);
    console.log(response);
    response.then(function(result){


    try {
        if (result[0].Password == nuevaCuenta.Password){
            switch(result[0].TipoDeCuenta) {
                case "Cliente":
                    localStorage.setItem('usuario', nuevaCuenta.Username);
                    document.location.href = "/MenuPrincipal";
                    break;
                case "Gerente":
                    document.location.href = "/MenuGerente";
                    break;
                case "Marketing":
                    document.location.href = "/MenuMarketing";
                    break;
                default:
                    break;
              }
        }else{
            alert("Contraseña Incorrecta!");
        }
    } catch (error) {
        console.error(error);
        alert("Datos Erroneos. No esta registrado!");
    }
        

    });

});
