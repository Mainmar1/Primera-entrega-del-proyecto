class Productos{

    constructor(nombre,marca,precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.id = 0;
    }

    mostrar_descripcion(){

        return (this.id + " " + this.nombre + " " + this.marca + " $" + this.precio);
        
    }

set_id(id_nuevo){
    this.id = id_nuevo;
}

}