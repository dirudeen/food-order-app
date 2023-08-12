import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    return setCartIsShown(true);
  }

  function HideShowCartHandler() {
    return setCartIsShown(true)
  }

  return (
    <>
    {cartIsShown && <Cart></Cart>}
    <Header onShowCart={showCartHandler}></Header>
    <Meals></Meals>
    </>
  );
}

export default App;
