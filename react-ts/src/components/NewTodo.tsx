import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/tdos-context";

const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInputValue = todoTextInputRef.current!.value;

    if (enteredInputValue.trim().length === 0) {
      // throw an error
      return;
    }

    todoCtx.addTodo(enteredInputValue);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
