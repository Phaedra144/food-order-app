import React, { useContext, useRef } from 'react'
import AmountContext from '../../../context/amount-context';
import styles from './MealForm.module.css';

const MealForm = (props) => {

    const amountRef = useRef();

    const ctx = useContext(AmountContext)

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        ctx.addAmount(enteredAmount);
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