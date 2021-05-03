/*
Usando as regras de ArrowFunctions:

Isso:
function sayHello(name = "fulano") {
  console.log("Olá" + name);
}

Vira isso:
*/

//Precisamos definir um name pra caso ele não haja um valor ainda
//Esse name será o nosso default, ou seja = parâmetro padrão:
const sayHello = (name = "Fulano") => console.log("Olá " + name);
sayHello();
