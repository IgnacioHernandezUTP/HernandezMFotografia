import Producto from '../../Entidades/E_Productos/Productos.js';
import E_Fotografia from '../../Entidades/E_Fotografia/Fotografia.js';
import CategoriaProducto from '../../Entidades/E_Categoria_Producto/CategoriaProducto.js';
import VentaProducto from '../../Entidades/E_Venta_Producto/VentaProducto.js';
import PedidoProducto from '../../Entidades/E_Pedido_Producto/PedidoProducto.js';
import { ObtenerProductos } from '../../Controladores/C_Productos/C_Productos.js';
import { ObtenerFotografiaPorID } from '../../Controladores/C_Productos/C_Productos.js';
import { ObtenerProdCategoriaPorID } from '../../Controladores/C_Productos/C_Productos.js';
import { ObtenerProductoPorID } from '../../Controladores/C_Productos/C_Productos.js';

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

var prods = ObtenerProductos();
prods.then(function(result){

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

    let { ProductoID, Nombre, Precio, Categoria, Fotografia } = value;

    var elemento = new Producto();

    elemento.ProductoID = ProductoID;
    elemento.Nombre = Nombre;
    elemento.Precio = Precio;
    elemento.Categoria = Categoria;
    elemento.Fotografia = Fotografia;
    
    var foto = ObtenerFotografiaPorID(elemento.Fotografia);
    foto.then(function(result){
        
        var imagenDeProd = new E_Fotografia();
        imagenDeProd.FotografiaID = result[0].FotografiaID;
        imagenDeProd.Url = result[0].Url;

        var cat = ObtenerProdCategoriaPorID(elemento.Categoria);
        cat.then(function(final){

            var categeoriaDeProd = new CategoriaProducto();
            categeoriaDeProd.CategoriaIDP = final[0].CategoriaIDP;
            categeoriaDeProd.Nombre = final[0].Nombre;
            console.log(elemento.ProductoID);
            div.innerHTML = `
            <img src="${imagenDeProd.Url}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${elemento.Nombre}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${categeoriaDeProd.Nombre}</span></a>
                <span class="block py-3">$<span class="text-md">${elemento.Precio}</span></span>
                <button class="Buy border-2 px-8 py-1 bg-yellow-400 border rounded-md" id="${elemento.ProductoID}">Agregar</button>
            </div>
    `;
    appendIn.appendChild(div);

        });

        

    });

    let venta = [];
    let ventaFinal = [];

    function RegistrarVenta(venta){

        var id = Math.floor(Math.random() * 100000);

        venta.forEach(function (prod) {

            var ventaProducto = new VentaProducto();

            ventaProducto.ProductoID = prod.ProductoID;
            ventaProducto.VentaID = id;
            ventaProducto.Cantidad = 1;

            if (ventaFinal.length > 0){

                ventaFinal.forEach(function (vent){
                    if (vent.ProductoID == ventaProducto.ProductoID){
                        vent.Cantidad = vent.Cantidad + 1;
                    }else{
                        ventaFinal.push(ventaProducto);
                    }
                })
            }else{
                ventaFinal.push(ventaProducto);
            }
            
            

            console.log(ventaFinal);
        });

        localStorage.setItem('ventaProductos', ventaFinal);

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
        var prodById = ObtenerProductoPorID(parseInt(id));
        prodById.then(function(result){
            venta.push(result[0]);
            

            let confirmAction = confirm(result[0].Nombre + " Agregado a la venta. Continuar a Pago?");
            if (confirmAction) {
                RegistrarVenta(venta);
              } else {
                //continua el flujo
              }

        });
       console.log(venta);
       
    }
    
    
    console.log(localStorage.getItem('usuario'));

}