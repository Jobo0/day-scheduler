import React, { useState, useEffect, useContext } from "react";
import Clock from "react-live-clock";
import CurrentTask from "./CurrentTask";
import classes from "./TimerDisplay.module.css";
import CartContext from "../../store/cart-context";

function TimerDisplay(props) {
  const [dateState, setDateState] = useState(new Date());
  const [taskDisplayState, setTaskDisplayState] = useState("no task");
  const [isAnimating, setIsAnimating] = useState(false);
  const context = useContext(CartContext);

  const [currentTaskState, setCurrentTaskState] = useState({
    name: "",
    description: "",
    time: 0,
    id: "",
  });
  // constant time refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setDateState(new Date());
    }, 5000);
    localStorage.setItem("cartDate", JSON.stringify(dateState.getDay()));
    console.log(`minutes: ${dateState.getMinutes()}`);
    return () => {
      clearTimeout(timer);
    };
  }, [dateState]);

  // update task per time refresh
  useEffect(() => {
    const validTask = context.items.find((task) => {
      if (task.complete !== true) {
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
      } else {
        return false;
      }
    });
    if (validTask === undefined) {
      setCurrentTaskState({
        name: "",
        description: "no more tasks",
        time: 0,
        id: "0",
      });
      setTaskDisplayState("no task");
    } else {
      setCurrentTaskState(validTask);
      setTaskDisplayState("show task");
    }
  }, [dateState, context.items]);

  //clear cart on next day
  useEffect(() => {
    if (localStorage.getItem("cartDate") !== JSON.stringify(dateState.getDay())){
      context.clearCart();
    }
  }, [dateState, context]);


  function completeTaskHandler() {
    if (isAnimating === true) {
      return;
    };
    setIsAnimating(true);
    setTimeout(()=> {
      setIsAnimating(false);
      context.completeItem(currentTaskState.id);
    }, 1000);
    
  }

  const bigbuttonClass = `${classes.bigbutton} ${isAnimating ? classes.completing : ""}`;

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

      {taskDisplayState === "show task" ? (
        <div className={bigbuttonClass} onClick={completeTaskHandler}>
          <CurrentTask
            name={currentTaskState.name}
            desc={currentTaskState.description}
            time={currentTaskState.time}
          ></CurrentTask>
        </div>
      ) : (
        <div className={classes.message}>{`No Remaining Tasks :)`}</div>
      )}
    </div>
  );
}

export default TimerDisplay;
