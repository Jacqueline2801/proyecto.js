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
const Manos = {
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
  constructor(marca, contenido, cantidad, precio) {
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
