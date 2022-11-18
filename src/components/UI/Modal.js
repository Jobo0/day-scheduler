import React, { ReactDOM } from "react";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
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
    {ReactDOM.createPortal(<Backdrop/>, document.getElementById('overlay'))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
  </React.Fragment>;
}

export default Modal;
