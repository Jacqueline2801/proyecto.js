console.log("todo esta funcionando bien");
let cliente;
cliente = "Mariana";
console.log(cliente);

let edad;
edad = 18;
console.log(edad);
if (edad >= 18) {
  console.log("puede realizar una compra");
} else {
  console.log("no puedes realizar una compra");
}
let MedioDePago;
MedioDePago = "tarjeta de credito";

if (MedioDePago === "tarjeta de debito") {
  console.log("La compra no tiene recargo");
} else if (MedioDePago === "tarjeta de credito") {
  console.log("La compra tiene un recargo del 5%");
} else {
  console.log("El medio de pago no es valido");
}
const bebidas = ["Coca Cola", "Sprite", "Manaos", "Levite"];
bebidas.push("Fanta");
bebidas.unshift("Agua Villavicencio", "Jugo Placer");
for (let i = 0; i < bebidas.length; i++) {
  console.log(bebidas[i]);
}
let indice = bebidas.indexOf("Manaos");
console.log(indice);
console.log(bebidas.sort());
console.log(bebidas.join("-"));
bebidas.forEach((bebida, indice) => {
  console.log(`Posición ${indice}: ${bebida}`);
});
const Manaos = {
  Sabor: "cola",
  Cantidad: "6 x 1.25L",
  Stock: 10,
};
const Placer = {
  Sabor: "Naranja",
  Cantidad: "6 x 1.25L",
  Stock: 25,
};
const Levite = {
  Sabor: "pomelo",
  Cantidad: "6 x 2L",
  Stock: 30,
};
const Ofertas = [Manos, Placer, Levite];
console.log("Las ofertas del mes son:");
Ofertas.forEach((oferta) => {
  console.log(
    `- Sabor: ${oferta.Sabor}, Cantidad: ${oferta.Cantidad}, Stock: ${oferta.Stock}`
  );
});
function sumar() {
  let numeroA = 10800;
  let numeroB = 4500;
  let numeroC = 6000;
  let resultado = numeroA + numeroB + numeroC;
  return resultado;
}
function IVA() {
  let totalconIva = 25773;
  let Subtotal = 21300;
  let resultado = totalconIva - Subtotal;
  return resultado;
}
let total = sumar();
console.log(`Subtotal de tu compra es de: ${total}`);

let discriminado = IVA();
console.log(`IVA discriminado: ${discriminado}`);

let conIva = total * 1.21;
console.log(`Importe total c/ IVA: ${conIva}`);
class ListaMayorista {
  static id = 0;
  constructor(marca, contenido, cantidad, precio) {
    this.id = ++ListaMayorista.id; //esto es un contador//
    this.marca = marca;
    this.contenido = contenido;
    this.cantidad = cantidad;
    this.precio = precio;
  }
  precioUnidad = () => {
    this.precio = this.precio / this.cantidad;
    console.log("precio por unidad: $" + this.precio);
  };
}
const producto1 = new ListaMayorista("arroz vanguardia", " 1kg", "10", "9800");
const producto2 = new ListaMayorista("pure huerta", " 250g", "12", "6800");
const producto3 = new ListaMayorista(
  "fideos sol pampeano",
  " 500g",
  "20",
  "11800"
);
const producto4 = new ListaMayorista("azucar ledezma", " 1kg", "10", "9500");
const producto5 = new ListaMayorista("aceite cañuelas", "1.5l", "15", "37000");
const producto6 = new ListaMayorista(
  "leche la serenisima",
  " 1l",
  "12",
  "1700"
);
console.log(producto1, producto2, producto3, producto4, producto5, producto6);
console.log("procuto1:");
producto1.precioUnidad();
console.log("procuto2:");
producto2.precioUnidad();
console.log("procuto3:");
producto3.precioUnidad();
console.log("procuto4:");
producto4.precioUnidad();
console.log("procuto5:");
producto5.precioUnidad();
console.log("procuto6:");
producto6.precioUnidad();
const Cargarproductos = [];
const cargarProducto = () => {
  let cargarModelo = prompt("Ingrese el preducto");
  let cargarContenido = prompt("Ingrese kg/l del producto");
  let cargarCantidad = prompt("Ingrese las unidades del producto");
  let cargarprecio = parseInt(prompt("ingrese el precio del producto"));
  const producto = new producto(
    cargarModelo,
    cargarContenido,
    cargarCantidad,
    cargarprecio
  );
  producto.push(producto);
  console.log(productos);
};
const VerProducto = () => {
  if (productos.length == 0) {
    console.log("No hay productos cargados");
  } else {
    console.log(productos);
  }
};
let menu = parseInt(
  prompt(
    "¡Bienvenido! Elija 1 para ver el catologo, elija 2 para cargar un prodcuto o 3 para salir"
  )
);
while (menu !== 3) {
  switch (menu) {
    case 1:
      VerProducto();
      break;
    case 2:
      cargarProducto();
      break;
    default:
      alert("¡La opcion es incorrecta!");
  }
  menu = parseInt(
    prompt(
      "¡Bienvenido! Elija 1 para ver el catologo, elija 2 para cargar un prodcuto o 3 para salir"
    )
  );
}
console.log("¡Gracias!");
const sucursal = "Lomas de Zamora";
const direccion = "Goya 579";
localStorage.setItem("sucursal", sucursal);
localStorage.setItem("direccion", direccion);
console.log(localStorage.getItem("sucursal"));
const sucursal2 = {
  surcursal: "Belgrano",
  direccion: "segurola 1739",
};
const sucursalJSON = JSON.stringify(sucursal2);
localStorage.setItem("sucursal2", sucursalJSON);
console.log(localStorage.getItem("sucursal2"));
const direccionJSON = JSON.parse(localStorage.getItem("sucursal2"));
console.log(sucursalJSON);

let operacion = prompt("ingrese si desea multiplicar o divir");
let primerNumero = parseInt(prompt("ingrese el primer numero"));
let segundoNumero = parseInt(prompt("ingrese el segundo numero"));
function elegirOperacion(operacion) {
  if (operacion == "multiplicar") {
    return (a, b) => a * b;
  } else if (operacion == "dividir") {
    return (a, b) => a / b;
  }
}
let operacionElegida = elegirOperacion(operacion);
console.log(operacionElegida(primerNumero, primerNumero));
const numeros = [1, 2, 3, 4, 5];
function numerador(numeros, visualizar) {
  for (const numero of numeros) {
    visualizar(numero);
  }
}
const tablaDel10 = [];
numerador(numero, (numero) => {
  tablaDel10.push(numero * 10);
});
console.log(tablaDel10);
forEach();
Productos.forEach((producto) => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});
let precioMaximo = parseInt(prompt("Ingrese el precio maximo a mostrar"));
const filtrado = Productos.filter(
  (producto) => producto.precio <= precioMaximo
);
console.log(filtrado);
let buscar = prompt("ingrese el producto para ver si esta disponible");
let hayStock = Productos.some((producto) => producto.nombre == buscar);
if (hayStock) {
  console.log("¡Esta disponible!");
} else {
  console.log("¡No esta en stock!");
}
const descuento = Productos.map((producto) => {
  let precioDescuento = producto.precio - (producto.precio * 20) / 100;
  return {
    nombre: producto.nombre,
    precio: precioDescuento,
  };
});
console.log(descuento);
let titulo = document.getElementById("title");
let titleContainer = document.getElementById("title-container");
console.log(titleContainer);
let Menu = document.getElementsByClassName("menu");
console.log(menu);
let container = document.getElementById("container");
container.innerHTML = "<h2>¡Tenemos las mejores ofertas!</h2>";
container.className = "main";

Productos.forEach((producto) => {
  let contenedor = document.createElement("div");
  contenedor.className = "card";
  contenedor.innerHTML = `<span>ID: ${producto.id}</span>
      <h3>Producto: ${producto.nombre}</h3>
      <h4>Precio: $${producto.precio}</h4>`;
  container.appendChild(contenedor);
});

let subtitulo = document.createElement("h2");
subtitulo.innerHTML = "<span>Ofertas del mes</span>";
document.body.append(subtitulo);
let pastas = ["Matarazzo", "lucchetti", "barletta", "Favorita"];
let productos = document.getElementById("productos");
for (const pastas of pastas) {
  let li = document.createElement("li");
  li.innerHTML = pastas;
  productos.appendChild(li);
}
let evento = document.getElementById("h1");
let clicks = 0;
evento.onclick = () => {
  clicks++;
  console.log("cantidad de clicks:", clicks);
};
let counter = document.getElementById("counter");
let sumar = document.getElementById("plus-button");
let restar = document.getElementById("minus-button");
let contador = 0;
sumar.onclick = () => {
  contador++;
  counter.innerHTML = contador;
};
sumar.onclick = () => {
  contador--;
  counter.innerHTML = contador;
};
let input = document.getElementById("input");
input.onkeydown = () => {
  console.log("apretaste una tecla");
};
const cervezas = [
  "quilmes",
  "brahama",
  "heineken",
  "stella artois",
  "schneider",
];
input.onchange = () => {
  const element = cervezas.find(cerveza => cerveza === input.value);
  console.log(element);
};
let container = document.getElementById("productos-container");

fetch("./db/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      const card = document.createElement("div")
      card.innerHTML = `<h2>Producto: ${producto.nombre}</h2>`
      container.appendChild(card)
    })
  });
