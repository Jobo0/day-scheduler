import React from "react";
import AvailableTasks from "./AvailableTasks";
import TasksSummary from "./TasksSummary";

function Tasks() {
  return (
    <React.Fragment>
      <TasksSummary></TasksSummary>
      <AvailableTasks></AvailableTasks>
    </React.Fragment>
  );
}

export default Tasks;
