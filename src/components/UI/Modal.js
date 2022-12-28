import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div onClick={props.props.onConfirm} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="card modal">
      <header className="header">
        <h2>{props.props.title}</h2>
      </header>
      <div className="content">
        <p>{props.props.message}</p>
      </div>
      <footer className="actions">
        <button onClick={props.props.onConfirm}>Okay</button>
      </footer>
    </div>
  );
};

export default function Modal(props) {
  console.log(props);
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop props={props} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay props={props} onClick={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
} 
