import React from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header() {
    return (
        <React.Fragment>
            <header>
                <h1 className={classes.header}>React Meals</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </React.Fragment>
    );
}

export default Header;