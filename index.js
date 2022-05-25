let arreglo_productos = new Array();
let gen_id = 1;
alert("¡Bienvenido al sistema de ingreso de mercaderia del supermercado!" + new Date());
let flag = true;
while(flag){

    let mensaje = "Ingrese la opcion deseada: ";
    mensaje += "\n1) Ingresar producto";
    mensaje += "\n2) Eliminar producto";
    mensaje += "\n3) Mostrar stock de mercaderia";
    mensaje += "\n4) Aplicar descuento para ofertas";
    mensaje += "\n5) Salir";

    let rta = parseInt(prompt(mensaje));

    switch(rta){
        case 1 : 
                ingresar_producto();
                break;

        case 2 : 
                eliminar_producto();
                break;

        case 3 : 
                mostrar_stock();
                break;

        case 4 : 
                aplicar_descuento();
                break;

        case 5 : 
                 alert("Gracias por usar la app, hasta la proxima!");
                 flag = false;
                 break;

        case null : 
                 alert("Gracias por usar la app, hasta la proxima!");
                 flag = false;
                 break;
        default : 
                 alert("Porfavor ingrese una opcion valida!");
    }


}


function ingresar_producto(){

        let producto = pedir_datos__producto();

        if(producto){
                producto.set_id(gen_id);
                gen_id ++ ;
                arreglo_productos.push(producto);
                alert("El producto se agrego con exito");
                
        }
}

function pedir_datos__producto(){
        let flag1 = true;
        while (flag1){

                let msj = "";


                let nombre = prompt("Ingresar nombre del producto: ").trim();
                let marca = prompt("Ingresar marca del prodcuto: ").trim();
                let precio = parseFloat(prompt("Ingresar precio del producto: "));

                if (!nombre){
                        msj += "\n Debe ingresar el nombre";
                }
                if (!marca){
                        msj += "\n Debe ingresar la marca";
                }
                if (isNaN(precio)){
                        msj += "Debe ingresar datos numericos";
                }
                if (msj != ""){
                        alert(msj);
                        flag1 = confirm("Desea volver a cargar los datos?");
                }
                else {
                        return new Productos (nombre, marca, precio);
                }
        }

       
}


function eliminar_producto(){

      if(existen_productos()){

        let id_ingresado = prompt("Ingresar el id del auto a eliminar");

        if (id_ingresado){

                let producto_encontrado = arreglo_productos.find((p)=> p.id == id_ingresado);

                if (producto_encontrado){
                        let rta = confirm("Desea eliminar el producto: " + producto_encontrado.mostrar_descripcion());

                        if(rta){
                                arreglo_productos = arreglo_productos.filter((p)=> p.id != id_ingresado);
                                alert("Se elimino con exito" + producto_encontrado.mostrar_descripcion());
                        }
                }

        }

      }
}

function existen_productos(){
        if(arreglo_productos.length == 0){
                alert("No hay productos cargados");
                return false;
        }

        return true;
}

function mostrar_stock(){
   if(existen_productos()){
     visualizar_arreglo();
   }

}

function visualizar_arreglo(){

        let msj = "Los productos en stock son: ";
        arreglo_productos.forEach((producto)=>{
                msj += "\n" + producto.mostrar_descripcion();
        })
        alert(msj);
}



 function aplicar_descuento(){

        if (existen_productos()){
        let descuento = parseInt(prompt("Ingresar el descuento que se desea aplicar: "));

        if (!isNaN(descuento)){

            let descuento1 = descuento / 100;
         const arreglo_productos_descuento = arreglo_productos.map((p)=>{
                 return {
                         nombre: p.nombre,
                         marca: p.marca,
                         precio: p.precio - (p.precio * descuento1) 
                 }
         })
         alert ("Se les aplicara a los productos un descuento del: " + descuento + "%");
          


         let mensaje = "Los productos con descuento son: \n";
        arreglo_productos_descuento.forEach((p)=>{
                mensaje += "Nombre: " + p.nombre + " - " + " Marca: " + p.marca + " - " +" Precio con el descuento aplicado: " + p.precio + "\n";
        })
        alert(mensaje);
        }
        
        
        }

 }