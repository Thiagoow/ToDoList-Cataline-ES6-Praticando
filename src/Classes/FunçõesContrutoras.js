/*
Vamos criar uma função construtora, pra a partir dela,
criar novos elementos. Sendo nesse exemplo:

Função construtora -> Modelo padrão de carro;
Novos elementos -> Carros.
*/

//Jeito CERTO:
function Car(model, brand, price) {
  this.model = model;
  this.brand = brand;
  this.price = price;
}
//Isso eu coloquei só pra mostrar no console a função construtora mesmo, não precisa:
console.log(Car);

/*
(P.S): A boa prática pra diferenciar funções construtoras de funções padrões,
é defini-las com a primeira letra maiúscula.

(P.S)1: o comando "this" não está adaptado para as ArrowFunctions,
sendo assim, não podemos usa-lá nesse caso. 
*/

const celta = new Car("Celta", "Chevrolet", 130);
const hb20 = new Car("Hb20", "Hyundai", 200);

console.log(celta);
console.log(hb20);

/*
Jeito ERRADO:

const car = {
  model: null,
  brand: null,
  price: 0,
};

const celta = car;
celta.model = "Celta";
celta.brand = "Chevrolet";
celta.price = 130;

const hb20 = car;
hb20.model = "Hb20";
hb20.brand = "Hyundai";
hb20.price = 200;

console.log(celta);
console.log(hb20);
*/
