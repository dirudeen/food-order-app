import React, { useContext, useEffect, useState } from "react";
import classes from "../Styles/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHightlighted, setBtnIsHightlighted] = useState(false);
  const ctx = useContext(CartContext);
  const {items} = ctx
  const numberOfItemsInCart = items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHightlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setBtnIsHightlighted(true);
    const identifier = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
