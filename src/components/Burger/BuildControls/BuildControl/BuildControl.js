import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = (props)=>{
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.Label}</div>
        <button className={classes.Less} onClick={props.removeIngred} disabled={props.disable}>Less</button>
        <button className={classes.More} onClick={props.addIngred}>More</button>
    </div>
  );
}

export default buildControl;