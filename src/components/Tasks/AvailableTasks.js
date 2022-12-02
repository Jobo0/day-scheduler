import React, { useContext } from "react";
import classes from "./AvailableTasks.module.css";
import Card from "../UI/Card";
import TaskItem from "./TaskItem/TaskItem";
import TasksContext from "../../store/tasks-context";
import NewTaskForm from "./NewTask/NewTaskForm";

function AvailableTasks(props) {
  const tasksContext = useContext(TasksContext);

  function editHandler(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.isEdit = true;
  }

  const tasksList = tasksContext.tasks.map((task) => (
    <TaskItem
      key={task.id}
      id={task.id}
      name={task.name}
      description={task.description}
      time={task.time}
      onEdit={editHandler}
    />
  ));

  return (
    <section className={classes.tasks}>
      <Card>
        <ul>
          {tasksContext.count === 0 ? tasksList : <p>Add some tasks to get started!</p>}
        </ul>
      </Card>
      <NewTaskForm></NewTaskForm>
    </section>
  );
}

export default AvailableTasks;
