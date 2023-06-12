import{combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers=combineReducers({
  allProducts:productReducer,
  product:selectedProductReducer
  // product is the key from ProductDetails in state.product
})

export default reducers;