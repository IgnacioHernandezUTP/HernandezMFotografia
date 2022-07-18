import { ObtenerServicios } from '../../Controladores/C_Modificar/C_Modificar.js';
import { ActualizarServicio } from '../../Controladores/C_Modificar/C_Modificar.js';
import Servicio from '../../Entidades/E_Servicio/Servicio.js';
import CategoriaProducto from '../../Entidades/E_Categoria_Producto/CategoriaProducto.js';



let table = document.getElementById("tablaServicios");



var serv = ObtenerServicios();
serv.then(function(result){

    for (let value of result){
        addElementProducto(table, value)
    }

});




function addElementProducto(appendIn, value){


    
    console.log(value);
    let tr = document.createElement('tr');
    
    let { ServicioID, Nombre, Precio, Descripcion, Categoria, Fotografia } = value;



    var servicio = new Servicio();

    servicio.ServicioID = ServicioID;
    servicio.Nombre = Nombre;
    servicio.Precio = Precio;
    servicio.Descripcion = Descripcion;
    servicio.Categoria = Categoria;
    servicio.Fotografia = Fotografia;

    


                    tr.innerHTML = `
                            <th scope="row">-</th>
                            <td id="nombre${servicio.ServicioID}">${servicio.Nombre}</td>
                            <td id="descripcion${servicio.ServicioID}">${servicio.Descripcion}</td>
                            <td id="precio${servicio.ServicioID}">${servicio.Precio}</td>
                            <input type="button" class="btnEdit" id="edit_button${servicio.ServicioID}" value="Editar" name="${servicio.ServicioID}" >
                            <input type="button" class="btnSave" id="save_button${servicio.ServicioID}" value="Actualizar" name="${servicio.ServicioID}" >
                    `;
                    appendIn.appendChild(tr);



    

}

document.addEventListener("DOMContentLoaded", function(e) {

    const buttons = document.querySelectorAll('.btnSave');
    console.log(buttons.length);


    buttons.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            event.stopImmediatePropagation();
            save_row(button.name);
            
         
        });
    });

})

document.addEventListener("DOMContentLoaded", function(e) {

    const buttons = document.querySelectorAll('.btnSave');
     console.log(buttons.length);
 

     buttons.forEach(button => {
         button.style.display = "none";
     });
 })

 document.addEventListener("DOMContentLoaded", function(e) {

    const buttons = document.querySelectorAll('.btnEdit');
     console.log(buttons.length);
 

     buttons.forEach(button => {
         button.addEventListener('click', function handleClick(event) {
             event.stopImmediatePropagation();
             edit_row(button.name);
             
          
         });
     });
 })

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
   

    var nombre = document.getElementById("nombre" + no);
    var descripcion = document.getElementById("descripcion" + no);
    var precio = document.getElementById("precio" + no);
   

    var nombre_data = nombre.innerHTML;
    var descripcion_data = descripcion.innerHTML;
    var precio_data = precio.innerHTML;
   

    nombre.innerHTML =
     "<input type='text' id='nombre_text" + no + "' value='" + nombre_data + "'>";

    descripcion.innerHTML =
     "<input type='text' id='descripcion_text" + no + "' value='" + descripcion_data + "'>";


    precio.innerHTML =
     "<input type='text' id='precio_text" + no + "' value='" + precio_data + "'>";
   }
   


function save_row(no) {

    var nombre_val = document.getElementById("nombre_text" + no).value;
    var descripcion_val = document.getElementById("descripcion_text" + no).value;
    var precio_val = document.getElementById("precio_text" + no).value;
   

    document.getElementById("nombre" + no).innerHTML = nombre_val;
    document.getElementById("descripcion" + no).innerHTML = descripcion_val;
    document.getElementById("precio" + no).innerHTML = precio_val;
   
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";

    var servActualizado = new Servicio();
    
    servActualizado.ServicioID = no;
    servActualizado.Nombre = nombre_val;
    servActualizado.Descripcion = descripcion_val;
    servActualizado.Precio = precio_val;


    

    ActualizarServicio(servActualizado);


}
