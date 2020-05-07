import React,{ Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component{
  state={
    ingredients:{},
    price: 0
  }

  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const IngredientObj = {};
    let price = 0;
    for(let param of query.entries()){
      if(param[0]=="price"){
        price= +param[1]
      }else{
        IngredientObj[param[0]] = +param[1];
      }

    }
    this.setState({ingredients:IngredientObj, price: price})
  }

  cancleCheckoutHandler =()=>{
   this.props.history.goBack();
  }


  continueCheckoutHandler=()=>{
    this.props.history.push(this.props.match.url+"/contact-data");
  }


  render(){
    return (
       <div>
        <CheckoutSummary Ingredient={this.state.ingredients} continueCheckoutHandler1={this.continueCheckoutHandler} cancleCheckoutHandler1={this.cancleCheckoutHandler} />
        <Route path={this.props.match.path+'/contact-data'} render={()=>{ return (<ContactData  Ingredients={this.state.ingredients} {...this.props} price={this.state.price}/>)}}/>
      </div>
    )
  }
}


export default Checkout;