import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./TaskItemEditForm.module.css";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";
import MUITimePicker from "../../UI/MUITimePicker.js";
import moment from "moment";

function TaskItemEditForm(props) {
  const nameRef = useRef();
  const descRef = useRef();
  const [timeState, setTimeState] = useState(null);
  function onTimeChange(newValue) {
    setTimeState(newValue);
    console.log(moment(timeState).format("HH:mm"));
  }

  function submitHandler(event) {
    event.preventDefault();
    const editedTask = {
      name: nameRef.current.value,
      description: descRef.current.value,
      time: timeState,
    };
    props.onSubmitEdit(editedTask);
    console.log(`TaskItemEditForm submitted id:${props.id}`);
    console.log(`submitted name: ${editedTask.name}`);
    props.onClose(event);
  }

  if (props.edit) {
    return (
      <form
        id={`edit-form${props.id}`}
        onSubmit={submitHandler}
        className={classes.form}
      >
        <Input
          ref={nameRef}
          label="Title"
          input={{
            id: "name" + props.id,
            type: "text",
            defaultValue: props.defaultName,
          }}
        />
        <Input
          ref={descRef}
          label="Desc"
          input={{
            id: "desc" + props.id,
            type: "text",
            defaultValue: props.defaultDesc,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <MUITimePicker time={timeState} onChange={onTimeChange}></MUITimePicker>
        </LocalizationProvider>
      </form>
    );
  }
  return;
}

export default TaskItemEditForm;
