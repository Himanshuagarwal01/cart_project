import React,{useEffect}from 'react';
import {useDispatch,useSelector} from "react-redux"
import ProductComponent from './ProductComponent';
import axios from "axios";
import { setProduts } from '../redux/actions/productActions';


const ProductListing = () => {
// this useSelector hook use to take state as an argument and return state
  const products=useSelector((state)=>state);
  const dispatch =useDispatch();

  const fetchProducts=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    .catch((error)=>{
      console.log(error)
    });
    //Dispatching an action setproduct
    dispatch(setProduts(response.data));
  };
useEffect(()=>{
  fetchProducts();
})

  console.log("Products:",products);

  return (
    <div className='boss'>
     <ProductComponent />
    </div>
  )
}

export default ProductListing;
