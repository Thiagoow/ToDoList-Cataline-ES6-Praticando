import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-jsonserver-todolist.herokuapp.com'
  // Se estiver local, substitua por -> "http://localhost:3000"
});
