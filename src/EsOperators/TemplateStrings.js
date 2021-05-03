/*
Concatenando do novo jeito >= ES6 a frase:
    "O valor da camisa é R$15, pode comprar!"
*/

const showProduct = (product, price) => {
  //Novo jeito (usando crase ao invés de aspas):
  console.log(
    `O valor de ${product} é de R$ ${price}, com a promoção aplicada! :)"`
  );
};
showProduct("Camisa", 20.5);

/*
  Dando até pra fazer operações com string no "product" e "price", como:
  Deixar tudo maiúsculo:
  ${product.toUpperCase()}
  Arredondar o preço:
  ${Math.round(price)}

    Jeito antigo (usando aspas invés de crase):

    console.log("o valor de " + product + " é de R$ " + price + ", pode comprar!");
*/
