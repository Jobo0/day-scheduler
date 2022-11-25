import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./TaskItemEditForm.module.css";

function TaskItemEditForm(props) {
  const nameRef = useRef();
  const descRef = useRef();
  const timeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const editedTask = {
      name: nameRef.current.value,
      description: descRef.current.value,
      time: timeRef.current.value,
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
        <Input
          ref={timeRef}
          label="Time"
          input={{
            id: "time" + props.id,
            type: "number",
            defaultValue: props.defaultTime,
          }}
        />
      </form>
    );
  }
  return;
}

export default TaskItemEditForm;
