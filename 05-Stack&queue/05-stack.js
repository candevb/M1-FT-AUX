const {
    Stack,
    Queue
} = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str) {
    //tu codigo aqui
    //recorrer el array de atras hacia adelante
    //ir pusheando cada elemento a un nuevo array
    //retornar el nuevo array
    let reverse = new Stack();
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            while (reverse.size() > 0) {
                temp += reverse.pop();
            }
            temp += ' ';
        } else {
            reverse.push(str[i]);
        }
    }
    while (reverse.size() > 0) temp += reverse.pop();
    return temp;
};








module.exports = {
    efectoEspejo,

}