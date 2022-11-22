import React from "react";
import classes from "./TaskItemForm.module.css";

function TaskItemForm(props) {
  if (!props.isEdit) {
    return (
      <form className={classes.form}>
        <button> ADD </button>
        <button onClick={props.onEdit}> EDIT </button>
      </form>
    );
  }

  return (
    <form className={classes.form}>
      <button> ADD </button>
      <button onClick={props.onCloseEdit}> SAVE </button>
    </form>
  );
}

export default TaskItemForm;
