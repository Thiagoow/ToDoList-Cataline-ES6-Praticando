//1------- Desestruturando/"tirando" dados de uma array:
const fruits = ["laranja", "morango", "maça"];

//Forma nova:
const [a, , c] = fruits;
console.log(a, c);

/*
Forma antiga:

const a = fruits[0];
const c = fruits[2];
console.log(a, c);
*/

//2------- Desestruturando um objeto:
const person = {
  name: "Thiago",
  surname: "Silva",
  age: 18,
  address: {
    city: "São Paulo",
    region: "SP",
  },
};

//Forma nova:
const {
  name,
  surname,
  address: { region },
} = person;

console.log(name, surname, region);

/*
Forma antiga:

const name = person.name;
const surname = person.surname;
const city = person.address.city;

console.log(name, surname, city);
*/

//3--------- Desestruturando um objeto pra uma função simples:
//Forma simplificada (desestruturada):
const showFullName = ({ name, surname }) => {
  console.log(`${name} ${surname}`);
};
showFullName(person);

/*
Forma complicada (estruturada):

const showFullName = (person) => {
  console.log(`${person.name} ${person.surname}`);
};
showFullName(person);
*/
