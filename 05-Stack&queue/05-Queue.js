const {
  Stack,
  Queue
} = require("../estructuras")

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function (queue, event) {
  // Tu código aca:
  /* primero declaro un array que es el que voy a devolver con los nombres que ingresan
  tengo que recorrer la cola, que es un objeto y en cada iteracion verificar que sea igual o mayor a 18(age),
  que el ticket sea igual al del parametro(event) y que el numero de ticket no haya sido ya utilizado .
  Si cumple todas esas condiciones, agrego el nombre al array.
  Si no cumple alguna de las condiciones, elimino la persona de la cola.
  */
  let tickPass = [],
      ingresan = [];

  while (queue.size()) {
    let persona = queue.dequeue();   
    if (persona.age >= 18 &&
    persona.ticket.event == event &&
      !tickPass.includes(persona.ticket.number)) {
      ingresan.push(persona.fullname);
      tickPass.push(persona.ticket.number);
    }
  };

  //var newQueue = new Queue();

  //for (let i = 0; i < queue.array.length; i++) {
  //if (ingresan.includes(queue.array[i].fullname)) {
  //newQueue.enqueue(queue.array[i])
  //}
  //};
  //queue = newQueue;

  return ingresan;
};




module.exports = {
  controlAcces,

}