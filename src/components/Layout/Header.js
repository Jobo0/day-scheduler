import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/headerImg4.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>day-scheduler</h1>
            <HeaderCartButton onClick={props.onButtonClick}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt="Header"/>
        </div>
    </React.Fragment>
}

export default Header;