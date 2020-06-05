import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
//import classes from './ContactData.module.css';
import Axios from "../../../hoc/axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Inputs from "../../../components/UI/Inputs/Inputs";
import { connect } from "react-redux";
import * as ActionName from "../../../store/actions/index";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";


class ContactData extends Component{
  state={
    orderForm:{
        name: {
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Enter your Name'
          },
          value:''
        },
        street:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Street'
          },
          value:''
        },
        zip:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Postal Code'
          },
          value:''
        },
        country:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Country'
          },
          value:''
        },
        email: {
          elementType:'input',
          elementConfig:{
            type:'email',
            placeholder:'Enter your Email'
          },
          value:''
        },
        deliveryMethod: {
          elementType:'select',
          elementConfig:{
            options:[
              {value:'fastest',displayValue:'Fastest'},
              {value:'cheapest',displayValue:'Cheapest'}
            ]
          }
        }
    }
    //,
    //isLoading: false
  }

  orderHandler = (event)=>{
    event.preventDefault();
    //this.setState({isLoading: true});
    const order = {
      Ingredient: this.props.ings,
      price: this.props.price,
      customerData: {
        name:this.state.orderForm.name.value,
        street:this.state.orderForm.street.value,
        zip:this.state.orderForm.zip.value,
        country:this.state.orderForm.country.value,
        email:this.state.orderForm.email.value
      },
      deliveryMethod:'Fastest'
    }
    
    this.props.onOrderHandlerStart(order);

  }

  inputChangedHandler = (event, elementKey)=>{
    const tempOrderForm = {...this.state.orderForm};
    const tempElemOrderForm = {...tempOrderForm[elementKey]};
    tempElemOrderForm.value = event.target.value;
    tempOrderForm[elementKey] =  tempElemOrderForm;
    this.setState({orderForm:tempOrderForm})
  }

  render(){
    const formElementArray = [];
    for(let key in this.state.orderForm){
      formElementArray.push({
        id: key,
        config:this.state.orderForm[key]
      });
    }
    let form =(
    <form onSubmit={this.orderHandler}>
      {
        formElementArray.map(inputElement=>{
          return <Inputs 
            key={inputElement.id} 
            elementType={inputElement.config.elementType} 
            elementConfig={inputElement.config.elementConfig} 
            value={inputElement.value} 
            elementChanged={event=>this.inputChangedHandler(event,inputElement.id)} 
            />
        })
      }

      <Button btnType="Success" >Order</Button> 
    </form>
    );
    if(this.props.loading){
      form=<Spinner/>
    }

    return (
      <div 
      // className={classes.ContactData}
      >
        <h1>Enter your Contact Data</h1>
        {form}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch)=>{
  return {
    onOrderHandlerStart: (order)=>{dispatch(ActionName.purchaseOrder(order))}
  }
}

const mapsStateToProps = (state)=>{
  return {
    ings: state.burgerBuilder.Ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  }
}

export default connect(mapsStateToProps,mapDispatchToProps)(withErrorHandler(ContactData, Axios));