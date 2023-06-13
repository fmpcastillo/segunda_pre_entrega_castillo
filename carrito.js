const productos = [
  { nombre: 'remera', precio: 10000 },
  { nombre: 'camisa', precio: 15000 },
  { nombre: 'pantalon', precio: 20000 },
  { nombre: 'short', precio: 12000 }
];
let carrito = []

let seleccion = prompt('Bienvenido a nuestro ecommerce. ¿Desea realizar compras?')

while(seleccion !== 'si' && seleccion !== 'no'){
  alert("Ingrese si o no")
  seleccion = prompt('Hola, ¿desea realizar una compra? (si o no)')  //Exige que la respuesta sea: si o no para terminar el bucle 
}

if (seleccion === 'si'){
  alert('Lista de productos')
  productos.sort((a, b) => a.precio - b.precio); // Ordenar productos por precio ascendente
  let todoslosproductos = productos.map(
    (producto) => producto.nombre + ' ' + producto.precio + '$');
    alert(todoslosproductos.join('\n'))

} else if (seleccion === 'no'){
  alert("Gracias por visitarnos")
}

while (seleccion !== 'no'){
  let producto = prompt('Escriba el nombre del producto')
  let precio = 0

  if (producto === 'remera' || producto === 'camisa' || producto === 'pantalon' || producto === 'short'){
    switch (producto) {
      case 'remera':
        precio = 10000;
        break;
      case 'camisa':
        precio = 15000;
        break;
      case 'pantalon':
        precio = 20000;
        break;
      case 'short':
        precio = 12000;
        break;
      default:
        break;     
    }

    let unidades = parseInt(prompt('¿Cuantas unidades desea llevar?'))
    carrito.push({producto, unidades, precio})
  } else {
    alert('No tenemos ese producto')
  }

  seleccion = prompt('¿Desea seguir comprando? (si o no)')
  if (seleccion === 'no'){
    alert('Gracias por su compra')
    carrito.forEach((carritofinal) => {
      console.log(`Producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades}, total a pagar: ${carritofinal.unidades * carritofinal.precio}`)
    })
    break;
  }
}
