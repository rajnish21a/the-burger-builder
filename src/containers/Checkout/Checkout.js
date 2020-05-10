import React,{ Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component{
  cancleCheckoutHandler =()=>{
   this.props.history.goBack();
  }


  continueCheckoutHandler=()=>{
    this.props.history.push(this.props.match.url+"/contact-data");
  }


  render(){
    return (
       <div>
        <CheckoutSummary Ingredient={this.props.ings} continueCheckoutHandler1={this.continueCheckoutHandler} cancleCheckoutHandler1={this.cancleCheckoutHandler} />
        <Route path={this.props.match.path+'/contact-data'} component={ContactData}/>
      </div>
    )
  }
}

const mapsStateToProps = (state)=>{
  return {
    ings: state.Ingredients,
    price: state.totalPrice
  }
}

export default connect(mapsStateToProps)(Checkout);