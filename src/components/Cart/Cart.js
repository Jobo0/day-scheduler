import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const items = [
    { id: "c1", name: "Breakfast", description: "Important", time: 2133 },
  ];
  const cartContent = (
    <ul>
      {items.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
  function submitHandler() {}
  return (
    <Modal onBackdropClick={props.onModalExit}>
      {cartContent}
      <div className={classes.total}>
        <span>Total Tasks</span>
        <span>3</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalExit}>
          Close
        </button>
        <button className={classes.button} onClick={submitHandler}>
          Begin
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
