import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
// import { useSelector } from "react-redux";
import Home from "./Home";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetail";
import Contact from "./Contact";
import About from "./About";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  const { loginWithRedirect, logout,isAuthenticated,user} = useAuth0();
  // const Cart_len =useSelector((state)=>state.cartreducer.Cart)
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
        <Box >
          <AppBar>
            <Toolbar>
              <nav className="navbar navbar-expand-lg navbar-dark bg- fixed-top">
                <div className="container-fluid">
                  <Typography variant="h6" component="div" sx={{ flexGrow: 15 }}>
                    <h1>Combine Store</h1>
                  </Typography>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     
                        
                           <li>{
                          isAuthenticated && (<p>{user.name}</p>)
                           }
                          </li>
                        
                      <li className="nav-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/products">Product</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contactUs">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/aboutUs">About Us</Link>
                      </li>

                      {
                        isAuthenticated ? ( <li>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                          >
                            Log Out
                          </Button>
                        </li>):( <li>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => loginWithRedirect()}
                        >
                          Log In
                        </Button>
                      </li>)
                      }
                       {/* <FormControlLabel sx={{marginLeft:"auto"}}  control={<Link to='/cart' className="link"><Badge badgeContent={Cart_len.length} color="secondary"><ShoppingCartIcon fontSize="large"  sx={{color:"black"}}/></Badge></Link>}/> */}
                     
                    </ul>
                  </div>
                </div>
              </nav>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" Component={ProductListing}></Route>
          <Route path="/product/:productId" Component={ProductDetail}></Route>
          <Route path="/product/contactUs" Component={Contact} sx={{margin:"500px"}}></Route>
          <Route path="/product/aboutUs" Component={About}></Route>
        </Routes>
      </Router>
     
      <div className="footer">
       <p>@Copyright </p>- CombineStore.com All rights Reserved By HIMANSHU AGARWAL
      </div>
      
      {/* <Home/>/ */}
    </>
  );
};

export default Header;
