import React from "react";
import classes from './AvailableTasks.module.css';
import Card from '../UI/Card';
import TaskItem from "./TaskItem/TaskItem";

const DUMMY_TASKS = [
    {
      id: '1',
      name: 'Breakfast',
      description: 'Fuel for the morning',
      time: 845,
    },
    {
      id: '2',
      name: 'Workout',
      description: 'Energy and mood boost',
      time: 1230,
    },
    {
      id: '3',
      name: 'Meal',
      description: 'Lunch/Dinner',
      time: 1650,
    },
    {
      id: '4',
      name: 'Complete 1 Chapter',
      description: '1 Chapter of learning',
      time: 2000,
    },
  ];

function AvailableTasks (props) {
    const tasksList = DUMMY_TASKS.map(task => <TaskItem key={task.id} id={task.id} name={task.name} description={task.description} time={task.time}/>);

    return <section className={classes.tasks}>
        <Card>
          <ul>
            {tasksList}
          </ul>
        </Card>
    </section>
}

export default AvailableTasks;