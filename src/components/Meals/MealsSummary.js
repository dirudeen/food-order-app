import React from 'react';
import classes from '../Styles/MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delievered To You</h2>
            <p>
                choose your favorite meal from out broad selection of available meals and enjoy a delcious luch or dinner at home
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by exprienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;
