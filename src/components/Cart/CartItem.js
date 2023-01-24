import React from "react";
import classes from "./CartItem.module.css";
import moment from "moment";

function CartItem(props) {
  //const hours = (props.time / 100) >> 0;
  //const minutes = props.time % 100;
  return (
    <li className={classes.item}>
      <div>
        <h2>{props.name}</h2>
        <span className={classes.complete}>{props.complete ? "Complete" : ""}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.time}>
            {moment(props.time).format("HH:mm")}</div>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
}

export default CartItem;
