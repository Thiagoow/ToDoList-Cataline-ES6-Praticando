/*
Os métodos estáticos nos permitem chamar métodos de classes (até com funções construtoras),
sem a necessidade de colocar o comando "new" antes da classe do método.

Além disso, eles são "puros", ou seja, não reconhecem NADA fora do escopo local deles!

Ou seja:
    Calculator.sum(10, 5)
Ao invés de:
    new Calculator.sum(10,5);

Para isso, devemos colocar o comando "static", antes do método(dentro da classe).
Isso serve pra facilitar, quando precisarmos chamar várias vezes um mesmo método. 

Entendendo melhor:
*/

//---------------------------Exemplo 1:
class Calculator {
  //Comando static:
  static sum(a, b) {
    return a + b;
  }
}

//Executando o método sem o comando "new":
console.log(Calculator.sum(10, 5));

//---------------------------Exemplo 2:
//Jeito CERTO:

class Person {
  constructor(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
  }

  get fullName() {
    /*
      Devemos definir o nome da classe dps do "return", para reconhecermos os atributos da classe
      "person" pois os métodos estáticos são "puros". 
      */
    return Person.joinNames(this.firstName, this.surName);
  }

  static joinNames(firstName, surName) {
    return `${firstName} ${surName}`;
  }
}

const person = new Person("Thiago", "Silva");
//Exibe o nome completo da pessoa:
console.log(person.fullName);

/*
//Jeito ERRADO (funciona, mas não é um jeito prático):
class Person {
  constructor(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
  }

  get fullName() {
    return `${this.firstName} ${this.surName}`;
  }
}

const person = new Person("Thiago", "Silva");
console.log(person.fullName);
*/
