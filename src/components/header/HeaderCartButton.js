import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [isBtnHighlighted, setBtnHighlighted] = useState(false);

    const ctx = useContext(CartContext);
    const items = ctx.items;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const headerBtn = `${styles.button} ${isBtnHighlighted ? styles.bump : ''}`;

    return (
        <React.Fragment>
            <button type={props.type || 'button'} className={headerBtn} onClick={props.onClick}>
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