import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [isAnimated, setIsAnimated] = useState(false);

  const context = useContext(CartContext);

  const itemTotal = context.count;

  const buttonClass = `${classes.button} ${isAnimated ? classes.bump : ""}`;

  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }
    setIsAnimated(true);

    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => {
        clearTimeout(timer);
    };
  }, [context.items]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>task-cart</span>
      <span className={classes.badge}>{itemTotal}</span>
    </button>
  );
}

export default HeaderCartButton;
