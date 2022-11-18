import React from "react";
import classes from "./TaskItem.module.css";

function TaskItem(props) {
  //props.time will be in form 1234 with hours (0-24) and minutes (00-60) 
    const hours = props.time / 100 >> 0;
    const minutes = props.time % 100;
  return (
    <li className={classes.task}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div className={classes.time}>{hours}:{minutes < 10 ? `0${minutes}` : minutes}</div>
      </div>
      <div>{}</div>
    </li>
  );
}

export default TaskItem;