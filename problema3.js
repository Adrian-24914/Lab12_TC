/**
 * Problema 3
 * Calcula la transpuesta de una matriz representada como una lista de listas.
 */
const transponerMatriz = (matriz) => {
  if (!Array.isArray(matriz)) {
    throw new TypeError("La matriz debe ser un arreglo.");
  }

  if (matriz.length === 0) {
    return [];
  }

  if (!matriz.every((fila) => Array.isArray(fila))) {
    throw new TypeError("Cada fila de la matriz debe ser un arreglo.");
  }

  const cantidadColumnas = matriz[0].length;
  const esRectangular = matriz.every(
    (fila) => fila.length === cantidadColumnas,
  );

  if (!esRectangular) {
    throw new Error("Todas las filas deben tener la misma cantidad de elementos.");
  }

  return matriz[0].map((_, columna) =>
    matriz.map((fila) => fila[columna]),
  );
};

const ejecutarEjemplo = () => {
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log("Matriz original:");
  console.table(matriz);

  console.log("Matriz transpuesta:");
  console.table(transponerMatriz(matriz));
};

if (require.main === module) {
  ejecutarEjemplo();
}

module.exports = { transponerMatriz };
