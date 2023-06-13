import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// This react components is used to return the single browser card of products-------

const  ProductComponent = () => {
  const products=useSelector((state)=>state.allProducts.products);
  const renderList=products.map((ele)=>{
    const{id,title,image,price,category}=ele;
    return (<div className='four column wide ' key={id}>
      <Link to={`/product/${id}`}>
    <div className='ui link cards ' style={{width:"20vw"}}>
    <div className='card'>
    <div className='image' style={{width:"10vw"}}>
      <img src={image} alt={title} style={{width:"13vw",height:"30vh"}} />
    </div>
    <div className='content'>
      <div className='header'>{title}</div>
      <div className='meta price'>${price}</div>
      <div className='meta '>{category}</div>
    </div>
    </div>
    </div>
    </Link>
  </div>)
  })
 
  return (
   <>
   
   <div style={{
    margin:"auto",
    marginRight:"50%",
    marginTop:"10%",
    width:"40vw",
    display: "grid",
    columnGap: "50px",
    rowGap: "50px",
    gridTemplateColumns: "auto auto auto auto",
    textDecoration:"none",
  }}>{renderList}</div></>
  );
}

export default ProductComponent
