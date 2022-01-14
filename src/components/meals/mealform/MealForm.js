import React, { useState } from 'react'
import styles from './MealForm.module.css';

const MealForm = (props) => {

    const [amountState, setAmountState] = useState(1);

    const amountStateHandler = (event) => {
        setAmountState(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddAmount(amountState);
    };

    return (
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="number" value={amountState} onChange={amountStateHandler} />
                </div>
                <button type="submit">+ Add</button>
            </form>
    );

};

export default MealForm;