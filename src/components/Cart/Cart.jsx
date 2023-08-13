import React, { useContext } from "react";
import classes from "../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import CardItem from "./CardItem";
import CartContex from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContex);

  const cartItemRemoveHandler = () => {};
  const cartItemAddHandler = () => {};

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CardItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
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
        <span>35.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
