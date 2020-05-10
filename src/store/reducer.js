import * as ActionName from "./actions";

const INGREDIENT_PRICE={
  meat: 0.5,
  salad:0.4,
  cheese:0.3,
  bacon:0.1
}

const initialState = {
  Ingredients:{
    meat: 0,
    salad:0,
    cheese:0,
    bacon:0
  },
  totalPrice: 4
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
      // this.enableOrderButtonHandler(dupIngredientRemove);
    default:
      return state;
  }
}

export default reducer;