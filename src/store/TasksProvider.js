import React, { useReducer } from "react";
import TasksContext from "./tasks-context";

const defaultTasksState = {
  tasks: [
    {
      id: "1",
      name: "Breakfast",
      description: "Fuel for the morning",
      time: 845,
    },
    {
      id: "2",
      name: "Workout",
      description: "Energy and mood boost",
      time: 1230,
    },
    {
      id: "3",
      name: "Meal",
      description: "Lunch/Dinner",
      time: 1650,
    },
    {
      id: "4",
      name: "Complete 1 Chapter",
      description: "1 Chapter of learning",
      time: 2000,
    },
  ],
  count: 4,
};

const tasksReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTasks = state.tasks.concat(action.task);
    const updatedCount = state.count + 1;
    return { tasks: updatedTasks, count: updatedCount };
  }
  if (action.type === "REMOVE") {
    //const updatedItems = state.item
    const updatedTasks = state.tasks.filter((task) => {return task.id !== action.id});
    const updatedCount = state.count - 1;
    return { tasks: updatedTasks, count: updatedCount};
  }
  if (action.type === "EDIT") {
    const updatedTasks = state.tasks.map((task) => {
      if (task.id === action.id) {
        return { id: action.id, ...action.newTask };
      }
      return task;
    });
    console.log(updatedTasks);
    return { tasks: updatedTasks };
  }
  return;
};

function TasksProvider(props) {
  const [tasksState, dispatchAction] = useReducer(
    tasksReducer,
    defaultTasksState
  );

  const addItemHandler = (task) => {
    dispatchAction({ type: "ADD", task: task });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE" , id:id});
  };

  const editItemHandler = (id, newTask) => {
    dispatchAction({ type: "EDIT", id: id, newTask: newTask });
  };

  const tasksContext = {
    tasks: tasksState.tasks,
    count: tasksState.count,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    editItem: editItemHandler,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {props.children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
