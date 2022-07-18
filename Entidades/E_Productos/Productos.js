export default class Producto{
    constructor(ProductoID, Nombre, Precio, Descripcion, Categoria, Fotografia, Inventario){
        this.ProductoID = ProductoID;
        this.Nombre = Nombre;
        this.Precio = Precio;
        this.Descripcion = Descripcion;
        this.Categoria = Categoria;
        this.Fotografia = Fotografia;
        this.Inventario = Inventario;
    }
}
//module.exports = Producto;