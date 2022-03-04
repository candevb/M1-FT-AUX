// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  if (array.length === 0) return 1;
  return array.shift() * producto(array);


};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  //recorrer el objeto viendo si hay mas objetos dentro, y luego si tiene el valor pasado por parametro.
  //bucle for in

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return isThere(obj[key], value);
    }
    if (obj[key] === value) return true;
  }
  return false;
};

module.exports = {
  producto,
  isThere
};