import React,{Component} from "react";
// import classes from "./Orders.module.css";
import Order from "./Order/Order";
import axios from "../../hoc/axios-order";
//import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


class Orders extends Component{
  state={
    orders:[],
    loading: true
  }

componentDidMount(){
  const fetchedOrders=[];
  axios.get('order.json')
  .then((res)=>{
      for(let key in res.data){
        fetchedOrders.push({...res.data[key], id:key})
      }
      this.setState({loading:false, orders: fetchedOrders})
  })
  .catch((error)=>{
    this.setState({loading:false})
  })
}

 render(){
   return (
    <div>
      {this.state.orders.map(order=>(
          <Order 
            key={order.id} 
            Ingredients={order.Ingredient} 
            price={+order.price} />
      ))}
    </div>
   );
 } 
}


export default WithErrorHandler(Orders,axios);