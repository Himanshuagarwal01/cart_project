import { actiontypes } from "../actions/actiontypes";
 
const initialstate={
  products:[],
};

export const productReducer=(state=initialstate,action)=>{
switch(action.type){
  case actiontypes.SET_PRODUCTS:
    return {...state,products:action.payload};
  default:
    return state;
}
};

export const selectedProductReducer=(state={},{type,payload})=>{
  switch(type){
    case actiontypes.SELECTED_PRODUCTS:
      return{...state,...payload}
    default:
      return state;
      

  }
}