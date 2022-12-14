import React, { useState } from "react";
import classes from "./NewTaskForm.module.css";
import NewTaskModal from "./NewTaskModal";

function NewTaskForm(props) {
  const [showForm, setShowForm] = useState(false);
  function onNewHandler() {
    setShowForm(true);
  }
  function onCloseHandler() {
    setShowForm(false);
  }

  return (
    <React.Fragment>
      <button onClick={onNewHandler} className={classes.new}>
        Add Task
      </button>
      <NewTaskModal showForm={showForm} onClose={onCloseHandler}></NewTaskModal>
    </React.Fragment>
  );
}

export default NewTaskForm;
