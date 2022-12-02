import React from 'react';
import HeaderButtonAlt from './HeaderButtonAlt';
import classes from './Header.module.css';

const HeaderAlt = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>day-scheduler</h1>
            <HeaderButtonAlt onClick={props.onButtonClick}>Cart</HeaderButtonAlt>
        </header>
    </React.Fragment>
}

export default HeaderAlt;