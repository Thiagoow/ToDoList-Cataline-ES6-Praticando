//Função de promessa, que executa uma promessa a cada 1seg:
const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      /*
      O reject e resolve, funcionam tipo como um If, se for reject, aparece a mensagem depois do "resolve";
      Se for resolve, aparece a mensagem que devemos inserir num console.log("") quando 
      a promessa for executada, nesse exemplo (com async e await): dentro do "try".
      */
      resolve("Promessa RECUSADA!(reject) 🥺😭");
    }, 1000);
  });

/*
A partir do ES8(ES2017), temos a sintaxe do "async", e do "await":
Sendo OBRIGATÓRIO, PRA TODO async E await: ESTAREM NUMA FUNÇÃO.
*/

//Agora se quisermos fazer mais de 1 promessa:
//Jeito CERTO (usando async):
const exec = async () => {
  //Realiza uma promessa:
  await myPromise();
  console.log("Primeira promessa executada");

  //Realiza outra promessa:
  await myPromise();
  console.log("Segunda promessa executada");

  //Realiza outra promessa:
  await myPromise();
  console.log("Terceira promessa executada");
};

/*
Se esse função não fosse uma arrow function:

async function exec() {
  await myPromise();
  const response = await myPromise();
  console.log(response);
  console.log("Ok");
};
*/

//Executa a função para criar mais de uma promessa:
exec();

/*
Jeito ERRADO:

myPromise().then((response) => {
  console.log("Primeira promessa executada");
  myPromise().then((response) => {
    console.log("Segunda promessa executada");
    myPromise().then((response) => {
      console.log("Terceira promessa executada");
    });
  });
});
*/
