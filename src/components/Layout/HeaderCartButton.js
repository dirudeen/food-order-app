import React , { useContext } from "react";
import classes from "../Styles/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
