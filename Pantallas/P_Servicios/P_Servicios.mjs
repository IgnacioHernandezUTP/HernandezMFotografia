import Servicio from '../../Entidades/E_Servicio/Servicio.js';
import E_Fotografia from '../../Entidades/E_Fotografia/Fotografia.js';
import CategoriaServicio from '../../Entidades/E_Categoria_Servicio/CategoriaServicio.js';
import PedidoServicio from '../../Entidades/E_Pedido_Servicio/PedidoServicio.js';
import { ObtenerServicios } from '../../Controladores/C_Servicios/C_Servicios.js';
import { ObtenerFotografiaPorID } from '../../Controladores/C_Servicios/C_Servicios.js';
import { ObtenerServicioPorID } from '../../Controladores/C_Servicios/C_Servicios.js';
import { ObtenerServCategoriaPorID } from '../../Controladores/C_Servicios/C_Servicios.js';

let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

//fetch('./database/store.json')
  //  .then(res => res.json())
  //  .then(json =>{

        // iterating products
       // for (let value of json){
        //    addElement(grid, value)
     //   }
        
  //  });

var servs = ObtenerServicios();
servs.then(function(result){

    for (let value of result){
        addElement(grid, value)
    }

});
// add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}



// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "item justify-self-center";

    let { ServicioID, Nombre, Precio, Descripcion, Categoria, Fotografia } = value;

    var elemento = new Servicio();

    elemento.ServicioID = ServicioID;
    elemento.Nombre = Nombre;
    elemento.Precio = Precio;
    elemento.Categoria = Categoria;
    elemento.Descripcion = Descripcion;
    elemento.Fotografia = Fotografia;
    
    var foto = ObtenerFotografiaPorID(elemento.Fotografia);
    foto.then(function(result){
        
        var imagenDeServ = new E_Fotografia();
        imagenDeServ.FotografiaID = result[0].FotografiaID;
        imagenDeServ.Url = result[0].Url;

        var cat = ObtenerServCategoriaPorID(elemento.Categoria);
        cat.then(function(final){

            var categeoriaDeServ = new CategoriaServicio();
            categeoriaDeServ.CategoriaIDS = final[0].CategoriaIDS;
            categeoriaDeServ.Nombre = final[0].Nombre;
            console.log(elemento.ServicioID);
            div.innerHTML = `
            <img src="${imagenDeServ.Url}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${elemento.Nombre}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${categeoriaDeServ.Nombre}</span></a>
                <span class="block py-3">$<span class="text-md">${elemento.Precio}</span></span>
                <button class="Buy border-2 px-8 py-1 bg-yellow-400 border rounded-md" id="${elemento.ServicioID}">Comprar</button>
            </div>
    `;
    appendIn.appendChild(div);

        });

        

    });

    let venta = [];
    let ventaFinal = [];

    function RegistrarVenta(venta){

        var id = Math.floor(Math.random() * 100000);
    
        var total = 0;

        venta.forEach(function (serv) {

            total = total + serv.Precio;
            localStorage.setItem('ServiciosVendido', JSON.stringify(serv));

        });

       
        localStorage.setItem('NumeroDeOrdenServ', id);
        localStorage.setItem('totalVentaServ', total);
        document.location.href = "/RecopDatosServ";
    }

    document.addEventListener("DOMContentLoaded", function(e) {

       const buttons = document.querySelectorAll('.Buy');
        console.log(buttons.length);
    

        buttons.forEach(button => {
            button.addEventListener('click', function handleClick(event) {
                event.stopImmediatePropagation();
                AgregarProductoAVenta(button.id);
                
             
            });
        });
    })
    
    

    function AgregarProductoAVenta(id){
        var servById = ObtenerServicioPorID(parseInt(id));
        servById.then(function(result){
            venta.push(result[0]);
            RegistrarVenta(venta);

            
            

        });
       console.log(venta);
       
    }
    
    
    console.log(localStorage.getItem('usuario'));

}