import { useState } from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";

function App() {
  const [todos, setTodos] = useState([]);
  // const [filter, setFilter] = useState("all");
  const [todosFilter, setTodosFilter] = useState(todos);

  return (
    <>
      <Header setTodosFilter={setTodosFilter} setTodos={setTodos} todos={todos} todosFilter={todosFilter}/>
      <Todolist setTodos={setTodos} todosFilter={todosFilter} todos={todosFilter}/>
      <Footer setTodosFilter={setTodosFilter} todos={todos} setTodos={setTodos} todosFilter={todosFilter}/>
    </>
  )
}

export default App