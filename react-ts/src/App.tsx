import React, { useState } from "react";
import Todos from "./components/Todos";
import todo from "./models/todo";
import NewTodo from "./components/NewTodo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  // const setTodos = [new todo("Learn React"), new todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeListHandler = (text: string) => {
    const finalList: any = todos.filter((val) => val.text !== text);
    setTodos(finalList);
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onClickRemove={removeListHandler} />
    </>
  );
}

export default App;
