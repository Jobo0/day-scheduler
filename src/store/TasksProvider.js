import React, { useEffect, useReducer } from "react";
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
  idCount: 4,
};

const tasksReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTasks = state.tasks.concat(action.task);
    const updatedCount = state.count + 1;
    const updatedIDCount = state.idCount + 1;
    return {
      tasks: updatedTasks,
      count: updatedCount,
      idCount: updatedIDCount,
    };
  }
  if (action.type === "REMOVE") {
    //const updatedItems = state.item
    const updatedTasks = state.tasks.filter((task) => {
      return task.id !== action.id;
    });
    const updatedCount = state.count - 1;
    return { tasks: updatedTasks, count: updatedCount, idCount: state.idCount };
  }
  if (action.type === "EDIT") {
    const updatedTasks = state.tasks.map((task) => {
      if (task.id === action.id) {
        return { id: action.id, ...action.newTask };
      }
      return task;
    });
    console.log(updatedTasks);
    return { tasks: updatedTasks, count: state.count, idCount: state.idCount };
  }
  return;
};

function getDefaultState() {
  const inStorage = localStorage.getItem("tasksState");
  return inStorage ? JSON.parse(inStorage) : defaultTasksState;
}

function TasksProvider(props) {
  const [tasksState, dispatchAction] = useReducer(
    tasksReducer,
    getDefaultState()
  );

  useEffect(() => {
    localStorage.setItem("tasksState", JSON.stringify(tasksState));
  }, [tasksState]);

  const addItemHandler = (task) => {
    dispatchAction({ type: "ADD", task: task });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const editItemHandler = (id, newTask) => {
    dispatchAction({ type: "EDIT", id: id, newTask: newTask });
  };

  const tasksContext = {
    tasks: tasksState.tasks,
    count: tasksState.count,
    idCount: tasksState.idCount,
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
