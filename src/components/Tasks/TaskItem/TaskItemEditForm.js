import React from "react";
import Input from "../../UI/Input";
import classes from './TaskItemEditForm.module.css';

function TaskItemEditForm (props) {
    function submitHandler(event) {
        event.preventDefault();
        console.log(`TaskItemEditForm submitted id:${props.id}`);
        props.onClose(event);
    }
    if (props.edit) {
        return <form id={`edit-form${props.id}`} onSubmit={submitHandler} className={classes.form}>
            <Input label='Title' input={{id: 'name' + props.id, type: 'text'}}/>
            <Input label='Desc' input={{id: 'desc' + props.id, type: 'text'}}/>
            <Input label='Time' input={{id: 'time' + props.id, type: 'number'}}/>
        </form>
    }
    return;
}

export default TaskItemEditForm;