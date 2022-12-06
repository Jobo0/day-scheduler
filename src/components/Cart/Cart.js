import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  function removeHandler(id) {
    context.removeItem(id);
  }
  const context = useContext(CartContext);
  const cartContent = (
    <ul className={classes["cart-items"]}>
      {context.items.map((task) => (
        <CartItem
          key={task.id}
          name={task.name}
          time={task.time}
          complete={task.complete}
          onRemove={removeHandler.bind(null, task.id)}
        />
      ))}
    </ul>
  );
  function submitHandler() {}
  return (
    <Modal onBackdropClick={props.onModalExit}>
      <div className={classes.total}>
        <span>Total Tasks</span>
        <span>{context.count}</span>
      </div>
      {cartContent}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalExit}>
          Close
        </button>
        <Link to="/start">
          <button className={classes.button} onClick={submitHandler}>
            Begin
          </button>
        </Link>
      </div>
    </Modal>
  );
}

export default Cart;
