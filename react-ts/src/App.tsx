import React from "react";
import Todos from "./components/Todos";

import NewTodo from "./components/NewTodo";

import "./App.css";
import TodosContextProvider from "./store/tdos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
