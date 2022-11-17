import React from "react";
import classes from './AvailableTasks.module.css';

const DUMMY_TASKS = [
    {
      id: 't1',
      name: 'Breakfast',
      description: 'Fuel for the morning',
      time: 8,
    },
    {
      id: 't2',
      name: 'Workout',
      description: 'A german specialty!',
      time: 12,
    },
    {
      id: 't3',
      name: 'Meal',
      description: 'Lunch/Dinner',
      time: 16,
    },
    {
      id: 't4',
      name: 'Complete 1 Chapter',
      description: '1 Chapter of learning',
      time: 20,
    },
  ];

function AvailableTasks (props) {
    const tasksList = DUMMY_TASKS.map(task => <li>{task.name}</li>);

    return <section className={classes.tasks}>
        <ul>
            {tasksList}
        </ul>
    </section>
}

export default AvailableTasks;