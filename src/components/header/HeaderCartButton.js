import React from "react";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    return (
        <React.Fragment>
            <button type={props.type || 'button'} className={styles.button} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>3</span>
            </button>
        </React.Fragment>
    );

};

export default HeaderCartButton;