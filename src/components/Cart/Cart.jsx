import React, { useContext } from "react";
import classes from "../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContex from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContex);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem(item)
  };
  const hasItems = ctx.items.length > 0
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
