import { createApp } from 'vue';
import ToDos from './api/ToDos';
import './assets/main.css';

const apiToDos = new ToDos();

const app = createApp({
  data() {
    return {
      //Array that contains all the items:
      ToDos: [],
      form: {
        //Form/item data:
        text: '',
        done: false
      }
    };
  },
  async created() {
    /* Activate GET request whenever project 
    is mounted (using lifeCycleHook: created) */
    this.listToDos();
  },

  methods: {
    async listToDos() {
      try {
        //Insert API data on the local 'ToDos' array:
        this.ToDos = await apiToDos.list();
      } catch (error) {
        alert(
          '⚠ERRO❗ Não foi possível CARREGAR sua lista de tarefas! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },

    async createToDo() {
      try {
        const data = await apiToDos.store(this.form);
        this.ToDos.push(data);

        //Clear form data:
        this.form.text = '';
        this.form.done = false;
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível CRIAR um novo ToDo! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },

    async changeToDoStatus(ToDo) {
      try {
        const data = await apiToDos.update({
          //Update only the done status (inverting it):
          ...ToDo,
          done: !ToDo.done
        });

        //Update by id on API:
        const index = this.ToDos.findIndex(({ id }) => id === data.id);
        //Update by id on local array:
        this.ToDos[index] = data;
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível ATUALIZAR seu ToDo! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },

    async deleteToDo(id) {
      try {
        await apiToDos.delete({ id });
        //Delete from API:
        const index = this.ToDos.findIndex((ToDo) => ToDo.id === id);
        //Delete from local array:
        this.ToDos.splice(index, 1);
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível DELETAR seu ToDo!🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    }
  }
});

/*
Onde será montada nossa aplicação com Vue.js.
O método "mount" funciona como um querySelector,
definindo em qual tag o app deve ser montado: */
app.mount('#app');

/*-----Only Local Requests (no API handler):
//GET request:
async function listar() {
  const todos = new ToDos();

  const response = await todos.list();
  console.log(response);
}

//POST request:
async function adicionar() {
  const todos = new ToDos();

  const response = await todos.store({ text: "Cortar o cabelo", done: false });
  console.log(response);
}

//PUT request:
async function atualizar() {
  const todos = new ToDos();

  const response = await todos.update({
    done: true,
    text: "Beber Água",
    id: 4,
  });
  console.log(response);
}

//DELETE request:
async function deletar() {
  const todos = new ToDos();

  const response = await todos.delete({});
  console.log(response);
}

//adicionar();
//atualizar();
//deletar();

//GET request tem que ser a primeira e última a ser executada,
//para exibir com todas as alterações já feitas pelos outros methods.
listar();
*/
