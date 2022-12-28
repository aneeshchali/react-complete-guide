import React, { useState, useRef } from "react";
import "./AddUser.css";
import Modal from "../UI/Modal";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setUserName] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid Input",
    //     message: "Please enter a valid name and age (non-empty values).",
    //   });
    //   return;
    // }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // if (+enteredAge < 0) {
    //   setError({
    //     title: "Invalid Age",
    //     message: "Please enter a valid age (> 0).",
    //   });
    //   return;
    // }

    const UserData = {
      key: Math.random(),
      username: enteredName,
      age: enteredUserAge,
    };

    // const UserData = {
    //   key: Math.random(),
    //   username: enteredUserName,
    //   age: enteredAge,
    // };
    props.DataSend(UserData);
 
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // setUserName("");
    // setAge("");
  };

  // const UsernameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const AgeChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

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
          // value={enteredName}
          // onChange={UsernameChangeHandler}
          id="username"
          ref={nameInputRef}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          // value={enteredUserAge}
          // onChange={AgeChangeHandler}
          id="age"
          ref={ageInputRef}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
