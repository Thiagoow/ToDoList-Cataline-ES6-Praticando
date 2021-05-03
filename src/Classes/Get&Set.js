/*
"get" --> Retorna atributos, mesmo que sejam privados pra além da classe;

(pra retornar atributos privados, devemos definir o get dentro da classe, se quisermos acessar 
o atributo definido no get, fora da classe)

"set" --> Dá valores ao atributo, mesmo que seja privado.

Entendendo melhor:
*/

class Person {
  constructor(name) {
    //O "_" torna a variável privada e imutável, acessível apenas dentro da classe:
    this._name = name;
  }

  //Para contornar o "_" da var, e deixar ela acessível fora da classe, usamos o "get":
  get name() {
    return this._name;
  }

  /*
  Para contornar a imutabilidade da variável com "_", usamos o "set": 
  */
  set name(newName) {
    this._name = newName;
  }
}

//Criando uma nova pessoa com a função construtora, e definindo o nome da pessoa:
const person = new Person("Thiago Silva");
//Tentando alterar o nome:
person.name = "Roberto Pereira";
/*
Se der erro, significa que o "_" está funcionando, e a var é imutável;
Se funcionar, o "set" está funcionando e a var voltou a ser mutável.
*/

//Exibe o nome da pessoa criada com a função construtora:
console.log(person.name);
