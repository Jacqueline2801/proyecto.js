let columna1 = document.getElementById("nombre-container");
let columna2 = document.getElementById("producto-container");
let columna3 = document.getElementById("precio-container");
fetch("./db/data.json")
  .then(response => response.json())
  .then(data => {
    const productosFiltrados = data.filter(producto => producto.id <= 9);

    productosFiltrados.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("grid-item");
      card.innerHTML = `
        <h2>Producto: ${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>Precio Mayorista: ${producto.precio}</h3>
        <h4>Precio Unitario: ${producto.precioxunidad}</h4>
        <button onclick="mostrarToast('${producto.nombre}')">Añadir</button>
      `;
      columna1.appendChild(card);
    });
  });
 fetch("./db/data.json")
  .then(response => response.json())
  .then(data => {
    const productosFiltrados = data.filter(producto => producto.id >= 10 && producto.id <= 18);
    productosFiltrados.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("grid-item");
      card.innerHTML = `
        <h2>Producto: ${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>Precio Mayorista: ${producto.precio}</h3>
        <h4>Precio Unitario: ${producto.precioxunidad}</h4>
        <button onclick="mostrarToast('${producto.nombre}')">Añadir</button>
      `;
      columna2.appendChild(card);
    });
  });
  fetch("./db/data.json")
  .then(response => response.json())
  .then(data => {
    const productosFiltrados = data.filter(producto => producto.id >=19 );

    productosFiltrados.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("grid-item");
      card.innerHTML = `
        <h2>Producto: ${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>Precio Mayorista: ${producto.precio}</h3>
        <h4>Precio Unitario: ${producto.precioxunidad}</h4>
        <button onclick="mostrarToast('${producto.nombre}')">Añadir</button>
      `;
      columna3.appendChild(card);
    });
  });
function mostrarToast(nombreProducto) {
  Toastify({
    text: `¡${nombreProducto} añadido al carrito!`,
    duration: 3000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    }
  }).showToast();
}
let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

Swal.fire("¡Bienvenido, tenemos las mejores ofertas!")
  .then(() => {
    return Swal.fire({
      title: "Ingrese el producto a buscar",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Buscar",
      showLoaderOnConfirm: true,
      preConfirm: async (productoBuscado) => {
        try {
          const response = await fetch("./db/data.json");
          if (!response.ok) {
            return Swal.showValidationMessage(`Error al cargar JSON`);
          }

          const data = await response.json();
          const productoEncontrado = data.find(producto => producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()));

          if (!productoEncontrado) {
            return Swal.showValidationMessage("Producto no encontrado");
          }

          return productoEncontrado;
        } catch (error) {
          Swal.showValidationMessage(`Error en la solicitud: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  })
  .then((result) => {
    if (result.isConfirmed) {
      agregarAlCarrito(result.value);
      return Swal.fire({
        title: `Producto encontrado: ${result.value.nombre}`,
        text: `Precio: $${result.value.precio}`,
        imageUrl: result.value.imagen,
        imageWidth: 100,
        imageHeight: 100,
        confirmButtonText: "Añadir al carrito"
      });
    }
  })
  .then(() => {
    return Swal.fire({
      text: "¿Listo para realizar la compra?",
      icon: "question",
      confirmButtonText: "Ver total"
    });
  })
  .then(() => {
    if (carrito.length === 0) {
      return Swal.fire({
        title: "Carrito vacío",
        text: "Primero debes elegir algún producto.",
        icon: "warning",
        confirmButtonText: "Ok"
      });
    }

    let totalCompra = carrito.reduce((total, producto) => total + producto.precio, 0);

    return Swal.fire({
      title: "Total de la compra",
      text: `El total de tu carrito es: $${totalCompra}`,
      icon: "info",
      confirmButtonText: "Continuar"
    });
  })
  .then(() => {
    return Swal.fire({
      title: "¿Desea confirmar la compra?",
      showDenyButton: true,
      confirmButtonText: "Comprar",
      denyButtonText: "Volver atrás"
    });
  })
  .then((resultado) => {
    if (resultado.isConfirmed) {
      return Swal.fire("¡Pago realizado!", "Compra realizada con éxito", "success");
    } else if (resultado.isDenied) {
      return Swal.fire("Compra cancelada", "¡Gracias por visitarnos!", "info");
    }
  });