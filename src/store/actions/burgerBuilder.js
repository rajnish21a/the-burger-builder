import * as ActionNames from "../actions/actionTypes";
import Axios from "../../hoc/axios-order";


export const add_ingredient = (ingName)=>{
  return {
    type: ActionNames.ADD_INGREDIENT,
    ingredName: ingName
  }
}


export const remove_ingredient = (ingName)=>{
  return {
    type: ActionNames.REMOVE_INGREDIENT,
    ingredName: ingName
  }
}


export const init_ingredient_failed = ()=>{
  return {
    type: ActionNames.INIT_INGREDIENT_FAILED
  }
}


export const init_ingredient1= (data) =>{
  return {
    type: ActionNames.INIT_INGREDIENT,
    data: data
  }
}

export const init_ingredient= () =>{
  return dispatch=>{
    Axios.get('Ingredients.json')
    .then(response=>{
      //this.setState({Ingredients:response.data})
      dispatch(init_ingredient1(response.data));
    })
    .catch(error=>{
      console.log(error)
      //this.setState({error:true})
      dispatch(init_ingredient_failed())
    })
  }
}




