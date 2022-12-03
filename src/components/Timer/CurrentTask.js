import React from "react";
import classes from "./CurrentTask.module.css";

function CurrentTask(props) {
  const hours = (props.time / 100) >> 0;
  const minutes = props.time % 100;

    function timeConvert() {
        const formatMin = minutes < 10 ? `0${minutes}` : minutes;
        if (hours === 0) {
            return `12:${formatMin} AM`;
        }
        if (hours < 12) {
            return `${hours}:${formatMin} AM`;
        }
        if (hours === 12) {
            return `12:${formatMin} PM`;
        }
        if (hours > 12) {
            return `${hours - 12}:${formatMin} PM`;
        }
        return;
    }

  return (
    <div className={classes.current}>
      <h2>{props.name}</h2>
      <div className={classes.desc}>{props.desc}</div>
      <div className={classes.label}>Complete by:</div>
      <div className={classes.time}>
        {timeConvert()}
      </div>
    </div>
  );
}

export default CurrentTask;
