import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import styled from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {

    const ctx = useContext(CartContext);

    const cartItems = ctx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          amount={cartItem.amount}
        />
      ));

    return (
        <React.Fragment>
            <ul className={styled['cart-items']}>{cartItems}</ul>
            <div className={styled.total}>
                <span>Total Amount</span>
                <span>$88.99</span>
            </div>
            <div className={styled.actions}>
                <button onClick={props.onCloseModal}>Close</button>
                <button>Order</button>
            </div>
        </React.Fragment>
    );
};

export default Cart;