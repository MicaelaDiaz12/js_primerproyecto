 
//  solicitar al usuario que elija el producto 

 function eleccion(){
 let ventaProducto 

  while (ventaProducto != ""){
    ventaProducto = Number(prompt("elija el producto que quiera "+"\n"+
    "\n 1-collares 2500"+"\n 2-pulseras 1500"+"\n 3-anillo 1500"+"\n"+
    "\n o toque el boton cancelar"));  

    switch (ventaProducto) {
      case 1:
        return "collares"

      case 2 :
        return "pulseras"

      case 3:
        return "anillo"
        
      default :
       alert ("ingrese un número correcto");
        break; 
    } 
  }
}


// se asigna un precio al producto 

function productoElegido (ventaProducto) {
  
   if (ventaProducto == "collares" ){
    return 6500  

   } else if (ventaProducto == "pulseras" ){
    return 4000

   } else if (ventaProducto == "anillo"){
    return  1500
   }    
}  


//  el usuario elige la forma de pago 

function formaDePago (precio){
let  medioDePago = Number(prompt("elija un medio de pago"+"\n"+ "\n 1-efectivo"+
                        "\n 2-tarjeta de credito")); 

//  pago en efectivo
  if (medioDePago == 1){ 
    let efectivo = Number(prompt("en total seria "+ precio + " con cuanto querés pagar?"));
    var cuenta = efectivo - precio;

    alert ("gracias por su compra"); 

//  pago en tarjeta 
  }else if(medioDePago == 2){
    let cuotasAPagar = Number(prompt("en cuantas cuotas querés pagarlo en 3 o en 6?"))
      
      if (cuotasAPagar === 3) {
        var cuenta = (precio + (precio * 0.10));
        var sumaTotal = Math.round(cuenta / cuotasAPagar);

        alert ("en total seria "+ sumaTotal + " en "+ cuotasAPagar + " cuotas" );
        alert ("gracias por su compra"); 

      }else if (cuotasAPagar === 6){
         var cuenta = (precio + (precio * 0.15));
         var sumaTotal = Math.round(cuenta / cuotasAPagar);

        alert ("en total seria "+ sumaTotal + " en "+ cuotasAPagar + " cuotas" );
        alert ("gracias por su compra"); 
      } 
  }   
}


let asignacion = eleccion ();
let  precio = productoElegido(asignacion);
formaDePago(precio);        


