import { actiontypes } from "./actiontypes";

export const setProduts=(products)=>{
  return{
    type:actiontypes.SET_PRODUCTS,
    payload:products
  }
}

export const selectedProduts=(products)=>{
  return{
    type:actiontypes.SELECTED_PRODUCTS,
    payload:products
  };
};