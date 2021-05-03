/*
"try" --> Se a promessa for aceita(resolve) ele tenta executar 
o código, se consegue faz o que tá dentro das chaves;

"Catch" --> Se a promessa for rejeitada, ou se 
der erro no try, faz oq tá entre as chaves.

"finally" --> Realiza algo quando as promessas finalizam, 
independente se deu "try" ou "catch"
*/

//Função de promessa, que executa uma promessa a cada 1seg:
const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      /*
      O reject e resolve, funcionam tipo como um If, se for reject, aparece a mensagem depois do "resolve";
      Se for resolve, aparece a mensagem que devemos inserir num console.log("") quando 
      a promessa for executada, nesse exemplo (com async e await): dentro do "try".
      */
      resolve("Promessa REJEITADA! (reject) 🥺😕");
    }, 1000);
  });

//-------------------Como fazer Try e Catch numa promessa com Async e Await:
const exec = async () => {
  try {
    //Realiza uma promessa:
    await myPromise();
    //Mensagem se a promessa for realizada/resolve:
    console.log("Promessa REALIZADA! (resolve) 🤩😎");
    //Caso o try dê errado:
  } catch (error) {
    //Mostra uma mensagem no console assim como o ".log", mas o ".warn" serve pra destacar 😉:
    console.warn(error);
    //Quando a promessa terminar 😁:
  } finally {
    console.log("Promessa(s) finalizada :D");
  }
};

//Executa a função para criar uma promessa:
exec();

/*
---------------------Try e Catch numa promessa sem Async/Await:

myPromise()
  .then(() => {
    console.log("Primeira promessa executada");
  })
  .catch((error) => {
    console.warn(error);
  });

  //Executa a função para criar uma promessa:
myPromise();
*/
