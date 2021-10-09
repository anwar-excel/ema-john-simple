import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price + product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orders {props.cart.length}</h5>
            <h5>Items Orders {totalQuantity}</h5>
            <p>total : {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax : {tax.toFixed(2)}</p>
            <p>GrandTotal {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;