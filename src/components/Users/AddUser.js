import React, { useState } from "react";
import "./AddUser.css";
import Modal from "../UI/Modal";

export default function AddUser(props) {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 0) {
      return;
    }
    const UserData = {
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

  return (
    <>
      <Modal title="error" message="oh no"></Modal>
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
