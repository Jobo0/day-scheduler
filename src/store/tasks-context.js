import React from "react";

const TasksContext = React.createContext({
  tasks: [],
  count: 0,
  idCount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  editItem: (id, newItem) => {},
});

export default TasksContext;
