import React, { useReducer, useEffect } from "react";
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
      return item.id !== action.id;
    });
    const updatedCount = state.count - 1;
    return { items: updatedItems, count: updatedCount };
  }
  if (action.type === "COMPLETE") {
    const updatedItems = state.items.map((item) => {
      if (item.id === action.id) {
        console.log(`item completed id: ${item.id}`);
        return { id:item.id, name:item.name, description:item.description, time:item.time, complete:true };
      }
      return item;
    });
    
    return {items: updatedItems, count: state.count};
  }
  if (action.type === "CLEAR") {
    return {items: [], count: 0};
  }
  return;
};

function getDefaultState() {
  const inStorage = localStorage.getItem("cartState");
  return inStorage ? JSON.parse(inStorage) : defaultCartState;
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    getDefaultState()
  );

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const completeItemHandler = (id) => {
    dispatchCartAction({ type: "COMPLETE", id: id});
  }

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR"});
  }

  const cartContext = {
    items: cartState.items,
    count: cartState.count,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    completeItem: completeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
