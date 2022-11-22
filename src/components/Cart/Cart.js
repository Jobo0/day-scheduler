import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
    const context = useContext(CartContext);
  const cartContent = (
    <ul>
      {context.items.map((task) => (
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
        <span>{context.count}</span>
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
