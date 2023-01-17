import React, { PropsWithChildren, useState } from "react";
import todo from "../models/todo";

export const TodoContext = React.createContext<{
  items: todo[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (text: string) => {},
});

const TodosContextProvider:React.FC<PropsWithChildren>= (props) => {
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

  const contextValue: {
    items: todo[];
    addTodo: (text: string) => void;
    removeTodo: (text: string) => void;
  } = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeListHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosContextProvider;
