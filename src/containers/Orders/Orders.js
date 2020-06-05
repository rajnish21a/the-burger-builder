import React,{Component} from "react";
// import classes from "./Orders.module.css";
import Order from "./Order/Order";
import{connect} from "react-redux";
import axios from "../../hoc/axios-order";
//import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as Actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";


class Orders extends Component{
  // state={
  //   orders:[],
  //   loading: true
  // }

componentDidMount(){
  this.props.onFetchOrder();
}

 render(){
   let order = <Spinner/>
   if(!this.props.loading){
     order = this.props.orders.map(order=>(
          <Order 
            key={order.id} 
            Ingredients={order.Ingredient} 
            price={+order.price} />
      ))
   }
   return (
    <div>
      {order}
    </div>
   );
 } 
}
const mapsDispatchToProps = dispatch=>{
  return {
    onFetchOrder: ()=>{dispatch(Actions.fetchOrder())}
  }
}

const mapsStateToProps = state=>{
  return {
    loading: state.order.loading,
    orders:state.order.orders
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(WithErrorHandler(Orders,axios));