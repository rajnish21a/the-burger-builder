import * as ActionNames from "../actions/actionTypes";
import Axios from "../../hoc/axios-order";


export const purchaseOrderSuccess = (id, orderData)=>{
  return {
    type: ActionNames.PURCHASE_ORDER_SUCCESS,
    id: id,
    orderData: orderData
  }
}


export const purchaseOrderFail = (error)=>{
  return {
    type: ActionNames.PURCHASE_ORDER_FAIL ,
    error: error
  }
}

export const purchaseOrderStart = ()=>{
  return {type:ActionNames.PURCHASE_ORDER_START}
}


export const purchaseOrder = (orderData)=>{
  return dispatch=>{
    dispatch(purchaseOrderStart);
    Axios.post('order.json', orderData)
    .then((response)=>{
      console.log(response);
      dispatch(purchaseOrderSuccess(response.data.name, orderData));
    })
    .catch((error)=>{
      console.log(error)
      dispatch(purchaseOrderFail(error));
    });
  }
}


export const purchaseInit = ()=>{
  return {
    type: ActionNames.PURCHASE_INIT
  }
}


export const fetchOrderSuccess=(orders)=>{
  return {
    type: ActionNames.FETCH_ORDER_SUCCESS,
    orders: orders
  }
}


export const fetchOrderFail = ()=>{
  return {
    type: ActionNames.PURCHASE_ORDER_FAIL
  }
}

export const fetchOrderStart = ()=>{
  return {
    type: ActionNames.FETCH_ORDER_START
  }
}

export const fetchOrder = ()=>{
  return dispatch =>{
      const fetchedOrders=[];
      dispatch(fetchOrderStart());
      Axios.get('order.json')
      .then((res)=>{
          for(let key in res.data){
            fetchedOrders.push({...res.data[key], id:key})
          }
          dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch((error)=>{
        //this.setState({loading:false});
            dispatch(fetchOrderFail());
      })
  }
}