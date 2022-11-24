import React, { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import TasksContext from "../../../store/tasks-context";
import Card from "../../UI/Card";
import classes from "./TaskItem.module.css";
import TaskItemEditForm from "./TaskItemEditForm";
import TaskItemForm from "./TaskItemForm";

function TaskItem(props) {
  //props.time will be in form 1234 with hours (0-24) and minutes (00-60)
  const hours = (props.time / 100) >> 0;
  const minutes = props.time % 100;

  const context = useContext(CartContext);
  const tasksContext = useContext(TasksContext);

  const [isEdit, setIsEdit] = useState(false);

  function onEditHandler(event) {
    event.preventDefault();
    setIsEdit(true);
  }

  function onCloseHandler(event) {
    event.preventDefault();
    setIsEdit(false);
  }

  function submitItemHandler(event) {
    event.preventDefault();
    context.addItem({name:props.name, description:props.description, time:props.time})
  }

  function submitEditHandler(event) {
    event.preventDefault();
    tasksContext.editItem(props.id, "replace with item field values from TaskItemEditForm");
  }

  return (
    <React.Fragment>
      <li className={classes.task}>
        <div>
          <h3>{props.name}</h3>
          <div>{props.description}</div>
          <div className={classes.time}>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}
          </div>
        </div>
        <div>
          <TaskItemForm onEdit={onEditHandler} isEdit={isEdit} onFormSubmit={submitItemHandler} id={props.id}/>
        </div>
      </li>
      <li className={classes["task-edit"]}>
        {isEdit ? (
          <Card className={classes["edit-card"]}>
            <TaskItemEditForm edit={isEdit} id={props.id} onClose={onCloseHandler} />
          </Card>
        ) : null}
      </li>
    </React.Fragment>
  );
}

export default TaskItem;
