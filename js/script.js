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
