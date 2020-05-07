import React from 'react';
import classes from "./Inputs.module.css";

const input = (props)=>{
  let inputElement = null;
  switch(props.elementType){
    case 'input':
      inputElement  = <input className={classes.InputElement} onChange={props.elementChanged}  type={props.elementConfig.type} placeholder={props.elementConfig.placeholder} value={props.value} />
      break;
    case 'textarea':
      inputElement  = <textarea className={classes.InputElement} onChange={props.elementChanged}  {...props.elementConfig} value={props.value} />
      break;
    case 'select':
      inputElement  = <select className={classes.InputElement} onChange={props.elementChanged} 
        value={props.value}
      >
        { props.elementConfig.options.map(option=>{
          return <option key={option.value} value={option.value}>{option.displayValue}</option>
        })
        }
      </select>
      break;
    default: 
      inputElement  = <input className={classes.InputElement} onChange={props.elementChanged} type={props.elementConfig.type} placeholder={props.elementConfig.placeholder} value={props.value}/>
      break;
  }
return (
  <div className={classes.Inputs}>
      <label className={classes.label} >{props.id}</label>
      {inputElement}
  </div>
  );
}

export default input;