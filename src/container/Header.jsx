import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetail";

const Header = () => {
  return (
    <>
      {/* <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <p>Combine store</p>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products">Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetail} />
          
        </Routes>

      </Router> */}

<Router>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <h1 className="navbar-brand" >Combine Store</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link> 
        </li>
        <li className="nav-item">
        <Link to="/products">Product</Link> 
        </li>
        
       
       
      </ul>
      
    </div>
  </div>
</nav>
            <Routes>
              <Route path ="/" Component={Home}></Route>
            <Route  path='/products' Component={ProductListing}>
            </Route>
            <Route  path='/product/:productId' Component={ProductDetail}>
            </Route>
            </Routes>
            
      </Router>
      {/* <Home/>/ */}
    </>
  );
};

export default Header;
