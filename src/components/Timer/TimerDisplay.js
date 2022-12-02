import React from "react";
import Clock from 'react-live-clock';
import classes from './TimerDisplay.module.css';

function TimerDisplay (props) {
    return <div className={classes.clock}><div>Currently</div><Clock format={'HH:mm'} ticking={true} timezone={'America/Toronto'}></Clock></div>;
};

export default TimerDisplay;