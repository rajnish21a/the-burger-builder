import * as ActionName from "../actions/actionTypes";

const INGREDIENT_PRICE={
  meat: 0.5,
  salad:0.4,
  cheese:0.3,
  bacon:0.1
}

const initialState = {
  Ingredients:{},
  totalPrice: 4,
  error: false
}


const reducer = (state= initialState, action)=>{
  switch (action.type) {
    case ActionName.ADD_INGREDIENT:
      return {
        ...state,
        Ingredients:{
          ...state.Ingredients,
          [action.ingredName]: state.Ingredients[action.ingredName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredName]
      }
      // this.enableOrderButtonHandler(dupIngredient);
    case ActionName.REMOVE_INGREDIENT:
      if(state.Ingredients[action.ingredName] === 0)
      return state;
      return {
        ...state,
        Ingredients:{
          ...state.Ingredients,
          [action.ingredName]:  state.Ingredients[action.ingredName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredName]
      }
    case ActionName.INIT_INGREDIENT:
      return {
        ...state,
        Ingredients: action.data
      }
    case ActionName.INIT_INGREDIENT_FAILED:  
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;