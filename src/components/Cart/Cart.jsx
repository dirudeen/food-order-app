import React from 'react';
import classes from '../Styles/Cart.module.css'

const Cart = (props) => {
    const CartItems = [{id: 'c1', name: 'Benachin', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)
    return (
        <div>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.25</span>
            </div>
            <div className={classes.actions}>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    );
}

export default Cart;
