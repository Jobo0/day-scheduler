import React from "react";
import Card from "../../UI/Card";
import classes from "./TaskItem.module.css";
import TaskItemEditForm from "./TaskItemEditForm";
import TaskItemForm from "./TaskItemForm";

function TaskItem(props) {
  //props.time will be in form 1234 with hours (0-24) and minutes (00-60)
  const hours = (props.time / 100) >> 0;
  const minutes = props.time % 100;

  function onEditHandler(event) {
    event.preventDefault();
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
          <TaskItemForm onEdit={onEditHandler} />
        </div>
      </li>
      <li className={classes["task-edit"]}>
        <Card className={classes["edit-card"]}>
          <TaskItemEditForm edit={true} id={props.id}/>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default TaskItem;
