import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  count: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const exists = state.items.findIndex((task) => {
      return task.id === action.item.id;
    });
    if (exists < 0) {
      //cant figure out how to add sorted items, have to sort entire list
      const updatedItems = state.items
        .concat(action.item)
        .sort((a, b) => (a.time > b.time ? 1 : -1));
      const updatedCount = state.count + 1;
      return { items: updatedItems, count: updatedCount };
    }
    return { items: state.items, count: state.count };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => {
      return item.id != action.id;
    });
    const updatedCount = state.count - 1;
    return { items: updatedItems, count: updatedCount };
  }
  return;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    count: cartState.count,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
