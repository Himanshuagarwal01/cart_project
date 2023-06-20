import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduts,
  removeselectedProduts,
  Add,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product); //this product is coming from the reducer
  const { image, title, price, category, description } = product;
  //useParams hook is used to get the parameters
  const { productId } = useParams();
  console.log("guwk",productId);
  const dispatch = useDispatch();
  // console.log(product);

  // This api i using to call the products indiviually------
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProduts(response.data));
    // console.log('response.data', response.data);
  };

  
  // useEffect(() => {
  //   console.log('product',product);
  // },[product])

  
  useEffect(() => {
    if(productId){
      fetchProductDetail();
    }
    // return () => {
      //   dispatch(removeselectedProduts());
    // };
    // console.log('productId',productId)
  },[]);

  return (
    <div>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading </div>
        ) : (
          <div
            className="ui placeholder segment"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10vw",
              height: "60vh",
              width: "60vw",
            }}
          >
            <div className="column rp">
              <div>
                <img
                  className="ui fluid image"
                  src={image}
                  style={{ width: "165px" }}
                />
              </div>
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">{category}</a>
              </h2>
              <p>${price}</p>
              <p>{description}</p>
              <button
                style={{ background: "red", color: "white", height: "6vh" }}
                onClick={() => {
                  dispatch(Add(product));
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
