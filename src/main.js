console.log("Hello world! ;)");

//-----------------------A PARTIR DAQUI, OS CÓDIGOS SÃO PRA EXECUTAR O "calculator.js":

/*
//Importa do calculator.js as funções "sum" e "subtraction"
    import { sum, subtraction } from "./calculator";

//Exibindo e executando a função no console, do seguinte jeito:
    console.log(sum(10, 5));
    console.log(subtraction(10, 3));
*/

//MAS, como nesse caso, eu quero usar todas as funções do calculator.js,
//a sum e subtraction, pois só tem elas lá). Eu poderia usar o "*", para importar TUDO:
import * as calculator from "./calculator.js";

//Definindo então, aqui no console.log, qual a função que desejamos
//de toda a importação "calculator", do calculator.js:

console.log(calculator.sum(10, 5));
console.log(calculator.subtraction(10, 3));
