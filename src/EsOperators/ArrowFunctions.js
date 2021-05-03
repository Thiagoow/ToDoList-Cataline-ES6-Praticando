const toDo = [
  { test: "lavar a louça", done: false },
  { text: "levar o lixo pra fora", done: true },
  { text: "dobrar as roupas", done: true },
];

//1------- Iremos transformar a função:
/*
const doneToDo = toDo.filter(function (toDos) {
  return toDos.done;
});
*/
//Numa função inLine mais simples, a qual tem o mesmo resultado (usando as arrowsFunctions):

//Diminuíndo grande parte do código, por se tratar de uma função simples, com apenas 1 argumento
const doneToDo = toDo.filter((toDos) => toDos.done);
console.log(doneToDo);

//2---------- Outro exemplo:
/*
function hello () {
    console.log("Hello World! :D")
}
console.log(hello);
*/
const hello = () => "Hello World! :D";
console.log(hello());
//Podendo uma função com tal sintaxe, receber qualquer coisa além de uma string, como:

//Um objeto:
const object = () => ({ name: "Thiago", age: 18 });
console.log(object());

//Ou uma array:
const vetor = () => [1, 2, 3, 4, 5];
console.log(vetor());
