import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";



const checkoutSummary = (props)=>{
  return (
    <div className={classes.CheckoutSummary}>
        <h2>The most wonderful Burger in the world</h2>
        <div style={{width:'100%',margin:'auto'}}>
          <Burger Ingredient={props.Ingredient}/>
        </div>
        <Button btnType="Danger" clicked={props.cancleCheckoutHandler1} >CANCLE</Button>
        <Button btnType="Success" clicked={props.continueCheckoutHandler1} >CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;