import React,{ Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Axios from "../../hoc/axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as ActionName from "../../store/actions";

const INGREDIENT_PRICE={
  meat: 0.5,
  salad:0.4,
  cheese:0.3,
  bacon:0.1
}



class BurgerBuilder extends Component{
  state={
    isPurchasable: false,
    purchasing: false,
    isLoading:false,
    error:false
  }

  componentDidMount(){
    // Axios.get('Ingredients.json')
    // .then(response=>{
    //   this.setState({Ingredients:response.data})
    // })
    // .catch(error=>{
    //   console.log(error)
    //   this.setState({error:true})
    // })
  }

  isPurshasingHandler = ()=>{
    this.setState({purchasing: true})
  }


  hideBackdropHandler = ()=>{
    this.setState({purchasing: false});
    this.props.history.goBack();
  }

  continueOrderHandler = ()=>{
    this.props.history.push('/checkout');
  }


  enableOrderButtonHandler = (dupIngredients)=>{
    let sum = Object.keys(INGREDIENT_PRICE).map((Ingredient)=>{
        return dupIngredients[Ingredient];
    }).reduce((summ, el)=>{
      return summ + el;
    },0);
    return sum > 0;
  }


  render(){
    const disabledInfo = {
      ...INGREDIENT_PRICE
    };

    for(let x in disabledInfo){
      disabledInfo[x] = disabledInfo[x] <= 0;
    };




    let burger =this.state.error? <p>Ingrdient Not Available, Application is Down</p>:<Spinner/>;
    let orderSummary = null
    if(this.props.ing){
      burger =  (       <><Burger Ingredient={this.props.ing} />
        <BuildControls  
        addIngredient={this.props.onAddIngredientHandler} 
        removeIngredient={this.props.onRemoveIngredientHandler} 
        disableInfo={disabledInfo} 
        price={this.props.tPrice.toFixed(2)} 
        disableOrderButton={this.enableOrderButtonHandler(this.props.ing)}  
        ordered={this.isPurshasingHandler}
        />
        </>
      )
      orderSummary= <OrderSummary 
      AllIngredient={this.props.ing} 
      totalPrice={this.props.tPrice} 
      closeOrder={this.hideBackdropHandler} 
      continueOrder={this.continueOrderHandler} />
    }

    if(this.state.isLoading){
      orderSummary = <Spinner/>
     }

    return (
      <Aux>
        <Modal show={this.state.purchasing} showHideBackdrop={this.hideBackdropHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onAddIngredientHandler: (ingred)=>{dispatch({type: ActionName.ADD_INGREDIENT, ingredName: ingred})},
    onRemoveIngredientHandler: (ingred)=>{dispatch({type: ActionName.REMOVE_INGREDIENT, ingredName: ingred})}
  }
}

const mapStateToProps = (state)=>{
  return {
    ing:state.Ingredients,
    tPrice: state.totalPrice
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, Axios));