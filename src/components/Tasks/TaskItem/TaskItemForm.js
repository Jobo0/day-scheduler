import React from "react";
import classes from "./TaskItemForm.module.css";

function TaskItemForm(props) {
    function submitHandler(event) {
        event.preventDefault();
    }

  if (!props.isEdit) {
    return (
      <form className={classes.form} onSubmit={props.onFormSubmit}>
        <button type="submit"> ADD </button>
        <button onClick={props.onEdit}> EDIT </button>
      </form>
    );
  }

  return (
    <form className={classes.form} onSubmit={props.onFormSubmit}>
      <button type="submit"> ADD </button>
      <button onClick={props.onCloseEdit}> SAVE </button>
    </form>
  );
}

export default TaskItemForm;
