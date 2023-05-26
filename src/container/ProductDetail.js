import React,{useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduts } from '../redux/actions/productActions';


const ProductDetail = () => {
  const product=useSelector((state)=>state.product);//this
  const {image,title, price, category,description}=product;
  const {productId}=useParams();
  const dispatch=useDispatch();
  console.log(product);


  const fetchProductDetail=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(error=>{
      console.log(error);
    });
    dispatch(selectedProduts(response.data))
  };

  useEffect(()=>{
    if(productId && productId !=="") fetchProductDetail()
  },[productId]);

  return (
  
    <div>
    <div className='ui grid container'>
      {Object.keys(product).length===0?(
        <div>...Loading</div>
      ):(<div className='ui placeholder segment'style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10vw",height:"58vh"}}>
      <div className='column rp'>
        <div>
          <img className='ui fluid image' src={image} style={{width:"165px"}}/>
        </div>
        <h1>{title}</h1>
        <h2>
          <a className='ui teal tag label'>{category}</a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )}
  </div>
  </div>
      
  )
}

export default ProductDetail;
