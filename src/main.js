import { createApp } from "vue";
import ToDos from "./api/ToDos";
import "./assets/css/main.css";

const apiToDos = new ToDos();

const app = createApp({
  data() {
    return {
      ToDos: "",
    };
  },
  async created() {
    this.fetchToDos();
  },
  methods: {
    async fetchToDos() {
      this.ToDos = await apiToDos.list();
    },
  },
});

/*
Onde será montada nossa aplicação com Vue.js,
onde o "mount" funciona como um querySelector,
definindo em qual tag o a] será montado:
*/
app.mount("#app");

/*
Para acessar nosso db.json (DB do server):
http://localhost:3333/ToDos

Para acessar nosso JsonServer:
http://localhost:3333/
*/

//----------------------Funções pra testar as Apis:
/*
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
///Listar tem que ser por último, pq aí ele mostra 
//com todas as alterações já feitas pelos outros métodos:
listar();
*/
