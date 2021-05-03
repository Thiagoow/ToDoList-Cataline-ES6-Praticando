import axios from "../utils/axios";

export default class ToDos {
  async index() {
    const response = await axios.get("/ToDos");
    return response;
  }
}
