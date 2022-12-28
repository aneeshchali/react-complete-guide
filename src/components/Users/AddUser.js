import React, { useState } from "react";
import "./AddUser.css";
import Modal from "../UI/Modal";

export default function AddUser(props) {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const UserData = {
      key: Math.random(),
      username: enteredUserName,
      age: enteredAge,
    };
    props.DataSend(UserData);
    setUserName("");
    setAge("");
  };

  const UsernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Modal>
      )}
      <form className="form" onSubmit={addUserHandler}>
        <label htmlFor="username" id="down">
          Username
        </label>
        <input
          type="text"
          value={enteredUserName}
          onChange={UsernameChangeHandler}
          id="username"
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
          id="age"
        ></input>
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
