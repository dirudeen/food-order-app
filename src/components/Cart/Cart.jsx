import React, { useContext, useState } from "react";
import classes from "../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContex from "../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const ctx = useContext(CartContex);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem(item);
  };
  const hasItems = ctx.items.length > 0;
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const sumbitOrderHandler = (userData) => {
    fetch("https://tasks-data-17dc7-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: ctx.items,
      })
    }).then(res =>{
      console.log(res.json())
    })
  };

  const actionButtons = (
    <div className={classes.actions}>
      <button className={classes["button-alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onConfirm={sumbitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isCheckout && actionButtons}
    </Modal>
  );
};

export default Cart;
