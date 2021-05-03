/*
Veremos os métodos das funções, as classes, que servem para 
não criarmos um função dentro de outra função, ou várias funções, dentro de uma só.
Por isso utilizamos as classes, onde nela, podemos criar vários métodos e até mesmo funções construtoras,
como por exemplo:
*/

//Jeito CERTO:
class Car {
  /*
  Função construtora de carros, onde atribuímos 
  valores default para os atributos de carros, 
  caso não sejam modificados:
  */
  constructor(
    brand = "ERRO - Sem marca 🤔",
    model = "ERRO - Sem modelo 🤔",
    price = "ERRO - Sem preço 🤔"
  ) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  acelerar() {
    console.log("Vrruummm!");
  }
}

const celta = new Car("Chevrolet", "Celta");
const hb20 = new Car("Hyundai", "HB20", "160K");

console.log("Celta fez:");
celta.acelerar();
console.log(celta);
console.log("O preço é: " + celta.price);
console.log(hb20);
console.log("A marca é: " + hb20.brand);

/*
Jeito ERRADO:

//Função construtora de carros:
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const celta = new Car("Chevrolet", "Celta", "100K");
const hb20 = new Car("Hyundai", "HB20", "160K");

console.log(celta);
console.log(hb20);
*/
