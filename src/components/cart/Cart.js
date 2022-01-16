import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import Modal from '../modal/Modal';
import styled from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
      };

    const cartItems = cartCtx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          amount={cartItem.amount}
          onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
          onAdd={cartItemAddHandler.bind(null, cartItem)}
        />
      ));

    return (
        <Modal onClose={props.onClose}>
            <ul className={styled['cart-items']}>{cartItems}</ul>
            <div className={styled.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styled.actions}>
                <button className={styled['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styled.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;