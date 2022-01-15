import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../modal/Modal";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const ctx = useContext(CartContext);

    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    const closeModal = () => {
        setIsCartOpen(false);
    };

    return (
        <React.Fragment>
            {isCartOpen && <Modal onClose={closeModal} />}
            <button type={props.type || 'button'} className={styles.button} onClick={openCartHandler}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>{ctx.totalNrOfItems}</span>
            </button>
        </React.Fragment>
    );

};

export default HeaderCartButton;