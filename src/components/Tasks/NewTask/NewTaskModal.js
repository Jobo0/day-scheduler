import React, { useContext, useRef, useState } from "react";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import classes from "./NewTaskModal.module.css";
import TasksContext from "../../../store/tasks-context";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import MUITimePicker from "../../UI/MUITimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

function NewTaskModal(props) {
  const nameRef = useRef();
  const descRef = useRef();
  //const timeRef = useRef();
  const [timeState, setTimeState] = useState(null);

  const tasksContext = useContext(TasksContext);

  function submitCreateHandler() {
    const newTask = {
      id: `${tasksContext.idCount + 1}`,
      name: nameRef.current.value,
      description: descRef.current.value,
      time: timeState,
    };

    tasksContext.addItem(newTask);
    props.onClose();
  }

  function timeChangeHandler(newTime) {
    setTimeState(newTime);
  }

  if (props.showForm) {
    return (
      <Modal>
        <form className={classes["new-form"]} onSubmit={submitCreateHandler}>
          <h2>Create a new task</h2>
          <Input ref={nameRef} label="Name" input={{ type: "text" }} />
          <Input ref={descRef} label="Desc" input={{ type: "text" }} />
          <div className={classes.time}><LocalizationProvider dateAdapter={AdapterMoment}><MUITimePicker time={timeState} onChange={timeChangeHandler}></MUITimePicker>
          </LocalizationProvider>
          </div>
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
