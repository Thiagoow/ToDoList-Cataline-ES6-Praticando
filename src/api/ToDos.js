import axios from '../utils/axios';

export default class ToDos {
  //Criando a requisição get, para exibir todos os ToDos:
  async list() {
    const { data } = await axios.get('/ToDos');
    //Retorna os ToDos, presentes no db.json:
    return data;
  }

  //Criando a requisição post, para adicionar um novo ToDo:
  async store({ text, done }) {
    const { data } = await axios.post('/ToDos', { text, done });
    return data;
  }

  //Criando a requisição put, para atualizar os ToDos:
  async update({ id, text, done }) {
    const { data } = await axios.put(`/ToDos/${id}`, { text, done });
    return data;
  }

  //Criando a requisição delete, para deletar os ToDos:
  async delete({ id }) {
    await axios.delete(`/ToDos/${id}`);
  }
}
