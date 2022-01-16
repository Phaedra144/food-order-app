import React from 'react';
import MealForm from '../mealform/MealForm';
import styles from './MealItem.module.css';

function MealItem(props) {

	return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <MealForm name={props.name} price={props.price} id={props.id}></MealForm>
        </li>
    );

}

export default MealItem;