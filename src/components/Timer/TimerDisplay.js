import React, { useState, useEffect, useContext} from "react";
import Clock from "react-live-clock";
import CurrentTask from "./CurrentTask";
import classes from "./TimerDisplay.module.css";
import CartContext from "../../store/cart-context";

function TimerDisplay(props) {
  const [dateState, setDateState] = useState(new Date());
  const [taskDisplayState, setTaskDisplayState] = useState("no task");
  const context = useContext(CartContext);

  const [currentTaskState, setCurrentTaskState] = useState({
    name: "",
    description: "",
    time: 0,
  });
  // constant time refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setDateState(new Date());
    }, 5000);

    console.log(`minutes: ${dateState.getMinutes()}`);
    return () => {
      clearTimeout(timer);
    };
  }, [dateState]);

  // update task per time refresh
  useEffect(() => {
    const validTask = context.items.find((task) => {
      if ((task.time / 100) << 0 < dateState.getHours()) {
        return false;
      }
      if ((task.time / 100) << 0 === dateState.getHours()) {
        if (task.time % 100 > dateState.getMinutes()) {
          return true;
        }
        return false;
      }
      return true;
    });
    if (validTask === undefined) {
      setCurrentTaskState({ name: "", description: "no more tasks", time: 0 });
      setTaskDisplayState("no task");
    } else {
      setCurrentTaskState(validTask);
      setTaskDisplayState("show task");
    }
  }, [dateState, context.items]);


  return (
    <div className={classes.clock}>
      <div>
        {dateState.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
      <Clock
        format={"hh:mm:ss A"}
        ticking={true}
        timezone={"America/Toronto"}
      ></Clock>
      {taskDisplayState === "show task" ? <CurrentTask
        name={currentTaskState.name}
        desc={currentTaskState.description}
        time={currentTaskState.time}
      ></CurrentTask> : <div className={classes.message}>No Remaining Tasks</div>}
    </div>
  );
}

export default TimerDisplay;
