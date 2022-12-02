import React from "react";
import classes from "./TaskItemForm.module.css";

function TaskItemForm(props) {
    function submitHandler(event) {
        event.preventDefault();
    }

  if (!props.isEdit) {
    return (
      <form className={classes.form} onSubmit={props.onFormSubmit}>
        <div><button type="submit"> ADD </button></div>
        <button onClick={props.onEdit}> EDIT </button>
      </form>
    );
  }

  return (
    <form className={classes.form} onSubmit={props.onFormSubmit}>
      <div><button className={classes.add} type="submit"> ADD </button></div>
      <div className={classes.inline}>
        <button type="button" onClick={props.onDelete}> DELETE </button>
        <button form={`edit-form${props.id}`} type="submit"> SAVE </button>
      </div>
    </form>
  );
}

export default TaskItemForm;
