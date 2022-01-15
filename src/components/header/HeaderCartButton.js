import React, { useContext, useState } from "react";
import AmountContext from "../../context/amount-context";
import Modal from "../modal/Modal";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const ctx = useContext(AmountContext);

    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    return (
        <React.Fragment>
            {isCartOpen && <Modal />}
            <button type={props.type || 'button'} className={styles.button} onClick={openCartHandler}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>{ctx.givenAmount}</span>
            </button>
        </React.Fragment>
    );

};

export default HeaderCartButton;