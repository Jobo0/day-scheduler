import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';


function HeaderCartButton (props) {
    const context = useContext(CartContext);

    const itemTotal = context.count;
    
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            task-cart
        </span>
        <span className={classes.badge}>
            {itemTotal}
        </span>
    </button>
}

export default HeaderCartButton;