/*
Quando o nome da propriedade é igual ao nome da variável,
a partir do ES6 podemos simplesmente encurtar o código:
*/

const name = "camisa";
const price = 20;

const product = {
  name,
  price,
  inStock: true,
};

console.log(product);

/*
Forma antiga (antes do ES6):

const name = "camisa";
const price = 20;

const product = {
  name: name,
  price: price,
  inStock: true,
};

console.log(product);
*/
