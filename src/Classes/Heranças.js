/*
O conceito de heranças serve pra passar
atributos e métodos de uma classe, para outra.

Passando a herança da classe pai, pra classe filho, com o comando:
    class "filho" extends "pai" {

    }

Herdando o construtor da classe pai pra classe filho:
    super();
Sendo a mesma coisa que fazer:
    new classePai();

Herdando um método específico da classe pai pra filho, com o comando:
    super.métodoX();
Sendo a mesma coisa que fazer:
    classePai.métodoX();
*/

class Veículo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log(`Acelerou com ${this.rodas} rodas`);
  }
}
const celta = new Veículo(4);
console.log("Veículo:");
celta.acelerar();

class Moto extends Veículo {
  empinar() {
    console.log(`Empinou com ${this.rodas} rodas`);
  }
  acelerar() {
    //Herdando o mesmo método existente na classe pai:
    super.acelerar();
    //Sendo a mesma coisa que fazer: ClassePai.acelerar();
    //Método existente apenas na classe moto:
    console.log("Acelerou como uma moto 😎");
  }
}

//Cria uma nova moto com número de rodas:
const lambreta = new Moto(2);
//Executa o método presente na classe moto:
console.log("Moto:");
lambreta.acelerar();
lambreta.empinar();
