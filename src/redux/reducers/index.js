import{combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers=combineReducers({
  allProducts:productReducer,
  product:selectedProductReducer
  // product is the key from ProductDetails 
})

export default reducers;