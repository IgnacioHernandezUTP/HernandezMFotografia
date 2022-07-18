import { ObtenerProductos } from '../../Controladores/C_Manejar_Inventario/C_Manejar_Inventario.js';
import { ObtenerProdCategoriaPorID } from '../../Controladores/C_Manejar_Inventario/C_Manejar_Inventario.js';
import { ActualizarInventario } from '../../Controladores/C_Manejar_Inventario/C_Manejar_Inventario.js';
import Producto from '../../Entidades/E_Productos/Productos.js';
import CategoriaProducto from '../../Entidades/E_Categoria_Producto/CategoriaProducto.js';



let table = document.getElementById("tablaPedidos");



var prods = ObtenerProductos();
prods.then(function(result){

    for (let value of result){
        addElementProducto(table, value)
    }

});




function addElementProducto(appendIn, value){


    
    console.log(value);
    let tr = document.createElement('tr');
    
    let { ProductoID, Nombre, Precio, Descripcion, Categoria, Fotografia, inventario } = value;



    var producto = new Producto();

    producto.ProductoID = ProductoID;
    producto.Nombre = Nombre;
    producto.Precio = Precio;
    producto.Descripcion = Descripcion;
    producto.Categoria = Categoria;
    producto.Fotografia = Fotografia;
    producto.Inventario = inventario;

    var cat = ObtenerProdCategoriaPorID(producto.Categoria);

    
    cat.then(function(catProd){

        var categoria = new CategoriaProducto();

        categoria.CategoriaIDP = catProd[0].CategoriaIDP;
        categoria.Nombre = catProd[0].Nombre;



                    tr.innerHTML = `
                            <th scope="row">-</th>
                            <td>${producto.Nombre}</td>
                            <td>${producto.Descripcion}</td>
                            <td>${categoria.Nombre}</td>
                            <td id="inventario${producto.ProductoID}">${producto.Inventario}</td>
                            <input type="button" class="btnEdit" id="edit_button${producto.ProductoID}" value="Editar" name="${producto.ProductoID}" >
                            <input type="button" class="btnSave" id="save_button${producto.ProductoID}" value="Actualizar" name="${producto.ProductoID}" >
                    `;
                    appendIn.appendChild(tr);

    });

    

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
   

    var inv = document.getElementById("inventario" + no);
   

    var inv_data = inv.innerHTML;
   

    inv.innerHTML =
     "<input type='text' id='inv_text" + no + "' value='" + inv_data + "'>";
   }


function save_row(no) {

    var inv_val = document.getElementById("inv_text" + no).value;
   

    document.getElementById("inventario" + no).innerHTML = inv_val;
   
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";

    var prodActualizado = new Producto();
    
    prodActualizado.ProductoID = no;
    prodActualizado.Inventario = inv_val;

    

    ActualizarInventario(prodActualizado);


}
