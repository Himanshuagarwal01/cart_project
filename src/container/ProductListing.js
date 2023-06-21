import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProduts } from "../redux/actions/productActions";


const ProductListing = () => {
  // this useSelector hook use to take state as an argument and return state
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("doreamon:", response.data);
      dispatch(setProduts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="boss">
      <ProductComponent />
      
    </div>
  );
};

export default ProductListing;
