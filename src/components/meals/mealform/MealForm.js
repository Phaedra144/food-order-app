import React, { useContext, useRef } from 'react'
import CartContext from '../../../context/cart-context';
import styles from './MealForm.module.css';

const MealForm = (props) => {

    const amountRef = useRef();

    const ctx = useContext(CartContext)

    const submitHandler = (event) => {
        event.preventDefault();
        const mealItem = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amountRef.current.value
        }
        console.log('New items sending to Cart: ' + JSON.stringify(mealItem))
        ctx.addItem(mealItem);
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.input}>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="number" ref={amountRef} defaultValue={1} />
            </div>
            <button type="submit">+ Add</button>
        </form>
    );

};

export default MealForm;