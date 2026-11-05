/**
 * Problema 4
 * Elimina de una lista los elementos indicados en otra lista.
 */
const eliminarElementos = (lista, elementosABorrar) => {
  if (!Array.isArray(lista)) {
    throw new TypeError("La lista original debe ser un arreglo.");
  }

  if (!Array.isArray(elementosABorrar)) {
    throw new TypeError("Los elementos a borrar deben estar en un arreglo.");
  }

  const elementosExcluidos = new Set(elementosABorrar);

  return lista.filter((elemento) => !elementosExcluidos.has(elemento));
};

const ejecutarEjemplo = () => {
  const colores = [
    "rojo",
    "verde",
    "azul",
    "amarillo",
    "gris",
    "blanco",
    "negro",
  ];
  const coloresABorrar = ["amarillo", "cafe", "blanco"];

  console.log("Lista original:");
  console.log(colores);

  console.log("Elementos a borrar:");
  console.log(coloresABorrar);

  console.log("Elementos restantes:");
  console.log(eliminarElementos(colores, coloresABorrar));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { eliminarElementos };
