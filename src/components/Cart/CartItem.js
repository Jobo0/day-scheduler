import React from "react";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const hours = (props.time / 100) >> 0;
  const minutes = props.time % 100;
  return (
    <li className={classes.item}>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.actions}>
        <div className={classes.time}>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}</div>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
}

export default CartItem;
