
const productos = [
  { nombre: 'remera', precio: 10 },
  { nombre: 'camisa', precio: 15 },
  { nombre: 'pantalon', precio: 20 },
  { nombre: 'short', precio: 25 }
];
let carrito = []

let seleccion = prompt('Bienvenido a nuestro ecomermer ¿desea realizar compras?')

while(seleccion != 'si' && seleccion !='no'){
  alert("ingrese si o no")
  seleccion = prompt('hola desea relizar un compra si o no') 
}
if (seleccion =="si"){
  alert('Lista de productos')
  let todoslosproductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosproductos.join('\n'))

}
 else if (seleccion == 'no'){
  alert("gracias por visitarnos")
 }

 while (seleccion != 'no'){
  let producto = prompt('Escriba nombre del producto')
   let precio = 0

   if (producto == 'remera' || producto == 'camisa' || producto == 'pantalon' || producto == 'short'){
  switch (producto) {
    case 'remera':
       precio = 10;
      break;
    case 'camisa':
      precio = 15;
      break;
    case 'pantalon':
      precio = 20;
      break;
     case 'short':
      precio = 15;
      break;
    default:
       break;     
  }
  
  let unidades = parseInt(prompt('¿Cuantas unidades desea llevar?'))
  carrito.push({producto, unidades, precio})
  } else {
    alert('No tenemos')
  }
  seleccion = prompt('desea seguir comprando')
  while(seleccion == 'no'){
    alert('Gracias por su compra')
    carrito.forEach((carritofinal )=> {
      console.log(`producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades}, total a pagar: ${carritofinal.unidades * carritofinal.precio}`)
    })
    break;
  }
 }