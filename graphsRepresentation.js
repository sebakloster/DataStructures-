//Como representar los graphs en codigo?

// 1) Edge List
//De esta manera representamos un grafo con un array que declaran sus aristas
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjasent List
//La forma de representarlo  es suponinedo que cada nodo es un indice, empezando desde el ineice mas chico, declaramos en un array con quien tiene conexion.

const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Lo mismo pero en un objeto, los indeices estan explicitos
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Ajadcent Matrix
//Matriz en donde cada fila es un nodo, y cada columna es el nodo con el cual se conecta. SI es 1 es que hay conexion, si hay 0 es q no.
// (Similar al de arriba, solo que representado en una matriz)
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
