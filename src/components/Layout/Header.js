import React, { Fragment } from 'react';
import classes from '../Styles/Header.module.css'
import mealsImg from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='bowls of meal'/>
        </div>
        </Fragment>
    );
}

export default Header;
