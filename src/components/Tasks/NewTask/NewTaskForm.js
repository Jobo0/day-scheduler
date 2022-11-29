import React from "react";
import classes from './NewTaskForm.module.css';

function NewTaskForm (props) {
    function onNewHandler() {
        
    }

    return <button onClick={onNewHandler} className={classes.new}>
        Add Task
    </button>
}

export default NewTaskForm;