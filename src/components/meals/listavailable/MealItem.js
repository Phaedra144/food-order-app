import React from 'react';
import MealForm from '../mealform/MealForm';
import styles from './MealItem.module.css';

function MealItem(props) {

    const inputAmountHandler = (amount) => {
		props.onAmountHandler(amount);
    };

	return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <MealForm onAddAmount={inputAmountHandler}></MealForm>
        </li>
    );

}

export default MealItem;