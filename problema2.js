/**
 * Problema 2
 * Ordena una lista de objetos con respecto a una clave indicada.
 *
 * Se crea una copia de la lista para no modificar la lista original.
 */
const ordenarPorClave = (lista, clave) => {
  if (!Array.isArray(lista)) {
    throw new TypeError("La lista debe ser un arreglo.");
  }

  if (typeof clave !== "string" || clave.trim() === "") {
    throw new TypeError("La clave debe ser una cadena no vacia.");
  }

  const todosTienenLaClave = lista.every(
    (elemento) =>
      elemento !== null &&
      typeof elemento === "object" &&
      Object.prototype.hasOwnProperty.call(elemento, clave),
  );

  if (!todosTienenLaClave) {
    throw new Error(`Todos los elementos deben contener la clave "${clave}".`);
  }

  return [...lista].sort((primero, segundo) => {
    if (primero[clave] === segundo[clave]) {
      return 0;
    }

    return primero[clave] < segundo[clave] ? -1 : 1;
  });
};

const ejecutarEjemplo = () => {
  const telefonos = [
    { make: "Nokia", model: 216, color: "Black" },
    { make: "Mi Max", model: 2, color: "Gold" },
    { make: "Samsung", model: 7, color: "Blue" },
  ];

  console.log("Lista original:");
  console.table(telefonos);

  console.log('Lista ordenada por la clave "model":');
  console.table(ordenarPorClave(telefonos, "model"));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { ordenarPorClave };
