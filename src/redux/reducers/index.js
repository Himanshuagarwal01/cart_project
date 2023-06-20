import{combineReducers} from "redux";
// import handleCart  from "./handleCart";
import {productReducer,selectedProductReducer} from "./productReducer";
// import cartreducer from "./cartReducer";



const reducers=combineReducers({
  
  allProducts:productReducer,
  product:selectedProductReducer,
  
  // product is the key from ProductDetails in state.product
})

export default reducers;