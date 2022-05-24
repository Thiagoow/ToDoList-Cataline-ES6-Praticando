import { createApp } from 'vue';
import ToDos from './api/ToDos';
import './assets/css/main.css';

const apiToDos = new ToDos();

const app = createApp({
  data() {
    return {
      ToDos: [],
      //Form do html :)
      form: {
        text: '',
        done: false
      }
    };
  },
  async created() {
    this.listToDos();
  },
  methods: {
    async listToDos() {
      try {
        this.ToDos = await apiToDos.list();
      } catch (error) {
        alert(
          '⚠ERRO❗ Não foi possível carregar sua lista de tarefas! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },
    async createToDo() {
      try {
        const data = await apiToDos.store(this.form);
        this.ToDos.push(data);

        //Limpa o form:
        this.form.text = '';
        this.form.done = false;
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível criar um novo ToDo! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },

    async changeToDoStatus(ToDo) {
      try {
        const data = await apiToDos.update({
          ...ToDo,
          done: !ToDo.done
        });

        //Atualiza na API:
        const index = this.ToDos.findIndex(({ id }) => id === data.id);
        //Atualiza na lista do HTML:
        this.ToDos[index] = data;
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível atualizar seu ToDo! 🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    },

    async deleteToDo(id) {
      try {
        await apiToDos.delete({ id });
        //Deleta o ToDo da API:
        const index = this.ToDos.findIndex((ToDo) => ToDo.id === id);
        //Deleta o ToDo da lista HTML:
        this.ToDos.splice(index, 1);
      } catch (error) {
        alert(
          '⚠ ERRO❗ 😵 Não foi possível deletar seu ToDo!🥺\nTalvez a API esteja inativa 🤔'
        );
        console.log(error);
      }
    }
  }
});

/*
Onde será montada nossa aplicação com Vue.js,
onde o "mount" funciona como um querySelector,
definindo em qual tag o app será montado: */
app.mount('#app');

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
