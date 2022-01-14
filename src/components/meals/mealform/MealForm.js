import React from 'react';
import styles from './MealForm.module.css';

const MealForm = (props) => {

    return (
        <form className={styles.form}>
            <div className={styles.input}>
                <label for="amount">Amount</label>
                <input id="amount" type="number" />
            </div>
            <button type="submit">+ Add</button>
        </form>
    );

};

export default MealForm;