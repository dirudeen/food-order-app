import React, { createContext } from 'react';

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
})

export default CartContext;
