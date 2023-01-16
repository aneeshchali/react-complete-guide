import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./todos.module.css";

const Todos: React.FC<{ items: todo[]; onClickRemove: (text:string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClickRemove ={props.onClickRemove}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
