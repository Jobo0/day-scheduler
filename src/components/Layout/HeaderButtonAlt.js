import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";

function HeaderButtonAlt(props) {

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.text}>return</span>
    </button>
  );
}

export default HeaderButtonAlt;
