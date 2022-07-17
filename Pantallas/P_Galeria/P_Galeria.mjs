import E_Fotografia from '../../Entidades/E_Fotografia/Fotografia.js';
import { ObtenerFotos } from '../../Controladores/C_Galeria/C_Galeria.js';
import { ObtenerFotoCategoriaPorID } from '../../Controladores/C_Galeria/C_Galeria.js';
import CategoriaFoto from '../../Entidades/E_Categoria_Fotografia/CategoriaFoto.js';



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

var fts = ObtenerFotos();
fts.then(function(result){

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

    let { FotografiaID, Categoria, Url, Titulo, Descripcion } = value;

    var elemento = new E_Fotografia();

    elemento.FotografiaID = FotografiaID;
    elemento.Url = Url;
    elemento.Titulo = Titulo;
    elemento.Categoria = Categoria;
    elemento.Descripcion = Descripcion;



    var cat = ObtenerFotoCategoriaPorID(elemento.Categoria);

    cat.then(function(result){

        var catFoto = new CategoriaFoto();

        catFoto.Nombre = result[0].Nombre;

        div.innerHTML = `
            <img src="${elemento.Url}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-xlg title">${elemento.Titulo}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${catFoto.Nombre}</span></a>
                <span class="block py-3"><span class="text-md">${elemento.Descripcion}</span></span>
            </div>
    `;
    appendIn.appendChild(div);

    });
    
    
    
}
    
 
    

 
    
    
    

