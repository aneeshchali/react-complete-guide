import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodoContext } from "../store/tdos-context";
import classes from "./todos.module.css";

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClickRemove={todoCtx.removeTodo}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
