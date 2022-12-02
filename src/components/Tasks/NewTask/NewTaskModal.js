import React, { useContext, useRef } from "react";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import classes from "./NewTaskModal.module.css";
import TasksContext from "../../../store/tasks-context";

function NewTaskModal(props) {
  const nameRef = useRef();
  const descRef = useRef();
  const timeRef = useRef();

  const tasksContext = useContext(TasksContext);

  function submitCreateHandler() {
    const newTask = {
      id: `${tasksContext.idCount + 1}`,
      name: nameRef.current.value,
      description: descRef.current.value,
      time: timeRef.current.value,
    };

    tasksContext.addItem(newTask);
    props.onClose(event);
  }

  if (props.showForm) {
    return (
      <Modal>
        <form className={classes["new-form"]} onSubmit={submitCreateHandler}>
          <h2>Create a new task</h2>
          <Input ref={nameRef} label="Name" input={{ type: "text" }} />
          <Input ref={descRef} label="Desc" input={{ type: "text" }} />
          <Input ref={timeRef} label="Time" input={{ type: "number" }} />

          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose} type="button">
              Cancel
            </button>
            <button className={classes.button} type="submit">
              Create
            </button>
          </div>
        </form>
      </Modal>
    );
  }
  return;
}

export default NewTaskModal;
