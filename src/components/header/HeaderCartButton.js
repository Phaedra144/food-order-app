import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const ctx = useContext(CartContext);

    return (
        <React.Fragment>
            <button type={props.type || 'button'} className={styles.button} onClick={props.onClick}>
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