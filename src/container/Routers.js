import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';


const Routers = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" Component={ProductListing}/>
            <Route path="/product/:productId" Component={ProductDetail}/>
            <Route>404 Not Found</Route>
          </Routes>
      </Router>
      </>
  )
}

export default Routers;
