import React,{ useEffect } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";


const OrderSummary = (props) =>{
  useEffect(()=>{
    console.log("OrderSUmmary rerendered");
  });

const orderIngredient = Object.keys(props.AllIngredient).map((igKey)=>{
  return (
  <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.AllIngredient[igKey]}</li>
  )
});

 return (
   <Aux>
     <h3>Order Summary</h3>
     <p>A delicious burger with following ingredients:</p>
     <ul>
        {orderIngredient}
     </ul>
 <p><strong>Total Price:{props.totalPrice.toFixed(2)}</strong></p>
     <p>Continue to Checkout?</p>
     <Button btnType="Danger" clicked={props.closeOrder}>CANCLE</Button>
     <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
   </Aux>
 )
}

export default React.memo(OrderSummary);

