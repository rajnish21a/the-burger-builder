import React from "react";
import classes from "./Order.module.css";


const order = (props)=>{
  const tempIngredient = [];
  for(let ingredientName in props.Ingredients){
    tempIngredient.push({
      name: ingredientName,
      amount: props.Ingredients[ingredientName]
    })
  }

  const ingredientOutput  = tempIngredient.map(ingredient=>{
  return (<span 
  style={{
    textTransform: 'capitalize',
    display:'inline-block',
    margin:'0 8px',
    border:'1px solid #ccc',
    padding:'5px'
  }} key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>)
  })

  return (
    <div className={classes.Order}>
      Ingredients: {ingredientOutput}
      <p>Price: <strong>Rs {props.price.toFixed(2)}</strong></p>
    </div>
  )
}

export default order;