import React,{ Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
//import * as ActionName from "../../store/actions/index";
//import Actions from "../../store/actions/actionTypes";

class Checkout extends Component{
  // componentWillMount(){
  //   this.props.onPurchageIni();
  // }


  cancleCheckoutHandler =()=>{
   this.props.history.goBack();
  }


  continueCheckoutHandler=()=>{
    this.props.history.push(this.props.match.url+"/contact-data");
  }


  render(){
    let summary = <Redirect to="/"/>
    if(this.props.ings){
      const purchasedRedirect = this.props.purchased ? <Redirect to="/"/>: null;
      summary=(       
      <div>
        {purchasedRedirect}
        <CheckoutSummary Ingredient={this.props.ings} continueCheckoutHandler1={this.continueCheckoutHandler} cancleCheckoutHandler1={this.cancleCheckoutHandler} />
        <Route path={this.props.match.path+'/contact-data'} component={ContactData}/>
      </div>
      )
    }

    return summary;
  }
}



const mapsStateToProps = (state)=>{
  return {
    ings: state.burgerBuilder.Ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased
  }
}

export default connect(mapsStateToProps)(Checkout);