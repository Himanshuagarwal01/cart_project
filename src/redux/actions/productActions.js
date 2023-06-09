import { actiontypes } from "../contants/actiontypes";

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

export const removeselectedProduts=(products)=>{
  return{
    type:actiontypes.REMOVE_SELECTED_PRODUCTS,
  
  };
};

export const Add=(product)=>{
  return{
      type:actiontypes.ADD_CART,
      payload:product,
  }
};

export const Remove=(products)=>{
  return{
      type:actiontypes.DELETE_CART,
      payload:products,
  }
};