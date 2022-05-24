import axios from '../utils/axios';

export default class ToDos {
  //GET:
  async list() {
    //List JSON data from baseUrl using '/ToDos' endpoint:
    const { data } = await axios.get('/ToDos');
    //Return all data inside db.json:
    return data;
  }

  //POST:
  async store({ text, done }) {
    //Insert JSON data on baseUrl using '/ToDos' endpoint:
    const { data } = await axios.post('/ToDos', { text, done });
    //Return updated data:
    return data;
  }

  //PUT:
  async update({ id, text, done }) {
    //Update the JSON data from a item on endpoint using his unique id:
    const { data } = await axios.put(`/ToDos/${id}`, { text, done });
    //Return updated data:
    return data;
  }

  //DELETE:
  async delete({ id }) {
    await axios.delete(`/ToDos/${id}`);
    /* Doesn't need to return anything
    GET method already does this. */
  }
}
