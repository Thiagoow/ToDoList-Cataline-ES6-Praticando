//1-------------Rest (...) -> Pega o resto (não especificado) de uma array, objeto ou função:

//Array:
const numbers = [1, 2, 3, 4, 5];
const [x, y, z, ...rest] = numbers;

console.log(rest);

//Objeto:
const person = {
  name: "Thiago",
  surname: "Silva",
  age: 18,
  address: {
    city: "São Paulo",
    region: "SP",
  },
};

const { name, ...rest1 } = person;
console.log(rest1);

//Função:
//No exemplo, uma função que soma todos os números da "sum", usando o "reduce"
const sum = (...params) => {
  return params.reduce((total, next) => total + next);
};
console.log(sum(5, 5, 10, 10));

//2-----------Spread (...) --> Expande uma array ou objeto e despeja em outro conteúdo

//Array (juntando o conteúdo de duas arrays):
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8, 9, 10];

const numbersUnited = [...numbers1, ...numbers2];
console.log(numbersUnited);

//Objeto (juntando o conteúdo de dois objetos):
const person1 = {
  ...person,
  /*
  Se eu quiser mudar algum dado(sem alterar o objeto original), 
  como a idade e a cidade(atributo do objeto original dentro do objeto "address"):
  */
  age: 50,
  address: { city: "Brasília", region: person.address.region },
};

console.log("Objeto original:");
console.log(person);
console.log("Objeto clonado (age e city alterados):");
console.log(person1);
//Não pra concatenar com a escrita sendo objeto :c
