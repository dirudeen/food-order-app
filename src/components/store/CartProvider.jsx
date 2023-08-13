import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = (items) => {};
  const removeItemFromCart = (id) => {};

  const values = {
    items: [],
    totalAmount: 0,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
