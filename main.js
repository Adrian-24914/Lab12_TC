const { ordenarPorClave } = require("./problema2");
const { transponerMatriz } = require("./problema3");
const { eliminarElementos } = require("./problema4");

const mostrarTitulo = (titulo) => {
  console.log(`\n${"=".repeat(10)} ${titulo} ${"=".repeat(10)}`);
};

const ejecutarLaboratorio = () => {
  mostrarTitulo("PROBLEMA 2");

  const telefonos = [
    { make: "Nokia", model: 216, color: "Black" },
    { make: "Mi Max", model: 2, color: "Gold" },
    { make: "Samsung", model: 7, color: "Blue" },
  ];

  console.log('Telefonos ordenados por la clave "model":');
  console.table(ordenarPorClave(telefonos, "model"));

  mostrarTitulo("PROBLEMA 3");

  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log("Matriz original:");
  console.table(matriz);
  console.log("Matriz transpuesta:");
  console.table(transponerMatriz(matriz));

  mostrarTitulo("PROBLEMA 4");

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
  ejecutarLaboratorio();
}

module.exports = { ejecutarLaboratorio };
