import React from "react";

const CartContext = React.createContext({
    items: [],
    count: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    completeItem: (id) => {},
    clearCart: () => {}
}) 

export default CartContext;