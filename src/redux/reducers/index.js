import{combineReducers} from "redux";
import {productReducer,selectedProductReducer} from "./productReducer";
import {cartreducer} from "./cartReducer";



const reducers=combineReducers({
  cartReducer: cartreducer,
  allProducts:productReducer,
  product:selectedProductReducer,
  
  // product is the key from ProductDetails in state.product
})

export default reducers;