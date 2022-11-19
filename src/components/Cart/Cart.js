import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const items = [
    { id: 'c1', 
        name: "Breakfast", description: "Important", time: 2133 }
  ];
  const cartContent = (
    <ul>
      {items.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartContent}
      <div className={classes.total}>
        <span>Total Tasks</span>
        <span>3</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>
            Close
        </button>
        <button className={classes.button}>
            Begin
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
