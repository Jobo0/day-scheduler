import React from "react";
import AvailableTasks from "./AvailableTasks";
import TasksSummary from "./TasksSummary";
import TasksProvider from "../../store/TasksProvider";

function Tasks() {
  return (
    <React.Fragment>
      <TasksSummary />
      <TasksProvider>
        <AvailableTasks />
      </TasksProvider>
    </React.Fragment>
  );
}

export default Tasks;
