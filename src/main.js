import ToDos from "./api/ToDos";

async function exec() {
  const todos = new ToDos();

  const response = await todos.index();
  console.log(response);
}

exec();
