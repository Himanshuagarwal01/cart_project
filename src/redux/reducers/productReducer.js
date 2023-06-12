import { actiontypes } from "../contants/actiontypes";
 
const initialstate={
  products:[],
};

export const productReducer=(state=initialstate,action)=>{
switch(action.type){
  case actiontypes.SET_PRODUCTS:
    //...state is the used to take the existing state  
    return {...state,products:action.payload};
  default:
    return state;
}
};

export const selectedProductReducer=(state={},{type,payload})=>{
  switch(type){
    case actiontypes.SELECTED_PRODUCTS:
      return{...state,...payload}
    case actiontypes.REMOVE_SELECTED_PRODUCTS:
      return{}
    default:
      return state;
      

  }
}