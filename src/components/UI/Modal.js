import React from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick}/>, document.getElementById('overlays'))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
  </React.Fragment>;
}

export default Modal;
