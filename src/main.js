import ToDos from "./api/ToDos";

//Executa a requisição list (get) para listar todos os ToDos:
async function listar() {
  const todos = new ToDos();

  const response = await todos.list();
  console.log(response);
}

async function adicionar() {
  const todos = new ToDos();

  const response = await todos.store({ text: "Cortar o cabelo", done: false });
  console.log(response);
}

async function atualizar() {
  const todos = new ToDos();

  const response = await todos.update({
    done: true,
    text: "Beber Água",
    id: 4,
  });
  console.log(response);
}

async function deletar() {
  const todos = new ToDos();

  const response = await todos.delete({});
  console.log(response);
}

//adicionar();
//atualizar();
//deletar();
/*Listar tem que ser por último, pq aí ele mostra 
com todas as alterações já feitas pelos outros métodos:*/
listar();
