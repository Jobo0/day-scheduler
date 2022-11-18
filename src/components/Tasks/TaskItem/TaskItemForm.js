import React from "react";
import classes from './TaskItemForm.module.css';

function TaskItemForm (props) {
    return <form className={classes.form}>
        <button> ADD </button>
        <button> EDIT </button>
    </form>
}

export default TaskItemForm;