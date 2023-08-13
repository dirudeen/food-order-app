import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    return setCartIsShown(true);
  }

  function HideCartHandler() {
    return setCartIsShown(false);
  }

  return (
    <CartProvider>
    {cartIsShown && <Cart onHideCart={HideCartHandler}></Cart>}
    <Header onShowCart={showCartHandler}></Header>
    <Meals></Meals>
    </CartProvider>
  );
}

export default App;
