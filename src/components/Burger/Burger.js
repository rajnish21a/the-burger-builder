import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) =>{
  const transformedIngredient = Object.keys(props.Ingredient).map(igKey=>{
    return [...Array(props.Ingredient[igKey])].map((_,id)=>{
      return <BurgerIngredient key={igKey+id} type={igKey} />
    })
  }).reduce((arr,el)=>{
    return arr.concat(el)
  },[]);
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredient.length === 0? 
           <p>Start Adding Burger Ingredient</p>
          : transformedIngredient
        }
        <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;