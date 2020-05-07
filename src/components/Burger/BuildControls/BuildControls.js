import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'}
]

const buildControls = (props)=>{

  let ctrl =  controls.map((ingred, id)=>{
      return <BuildControl 
                Label={ingred.label} 
                type={ingred.label} 
                key={ingred.label+ingred.id} 
                addIngred={()=>{props.addIngredient(ingred.type)}}  
                removeIngred={()=>{props.removeIngredient(ingred.type)}}  
                disable={props.disableInfo[ingred.type]} 
                />
                
  })

  return (
    <div className={classes.BuildControls}>
      <p>Current Price: {props.price}</p>
      {ctrl}
      <button 
        className={classes.OrderButton} 
        disabled={!props.disableOrderButton} 
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
  )
}

export default buildControls;