import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <>
      <div onClick={props.onConfirm} className="backdrop"></div>
      <div className="card modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </>
  );
}
