import React from 'react';
import Card from '../UI/Card';
import styled from './Cart.module.css';

function Cart() {

    const cartItems = [];

    return (
        <React.Fragment>
            <ul className={styled['cart-items']}>{cartItems}</ul>
            <div>
                <span className={styled.total}>Total Amount</span>
                <span>$88.99</span>
            </div>
        </React.Fragment>
    );
};

export default Cart;