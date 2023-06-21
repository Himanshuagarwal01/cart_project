import React from 'react'
import { Grid, Button, ButtonGroup, FormControlLabel} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Add, Remove } from '../redux/actions/productActions';


const Showcart = () => {
  const data = useSelector((state) => state.cartReducer.Cart);
  const dispatch = useDispatch();

  return (
    <>
    
    <h1 style={{ textAlign: "center", color: "white", marginTop:"116px"}}>
          Cart Details
          <hr className="text-light" />
        </h1>
        <Grid
        container
        spacing={2}
        sx={{ ml: "5vw", color: "white", width: "93vw" }}
        item
      >
        {data.map((ele)=>{
          return(
            <>
             <Grid xs={12} md={6} lg={4} item>
                  <div style={{ width: "10vw"}}>
                    <h5 className="card-title">{ele.title}</h5>
  
                    <img
                      src={ele.image}
                      style={{ width: "13vw", height: "30vh" }}
                      alt="Internet error"
                    />
                    <p className="card-text">{ele.description.slice(0,100)}</p>
                    <p className="card-text text-center">
                      Price: ${ele.price}{" "}
                      <span className="mx-5">Quantity: {ele.quantity}</span>
                    </p>
                    <p>Total: ${ele.quantity*ele.price}</p>
  
                    <ButtonGroup sx={{ mx: "auto", mt: "2rem" }}>
                       {/* mx-->mx means margin-left=auto and margin-right=auto */}
                      <FormControlLabel
                        control={
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{ width: "10vw" }}
                            onClick={()=>dispatch(Add(ele))}
                          >
                            +
                          </Button>
                        }
                      />
                        <FormControlLabel
                        control={
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{ width: "10vw" }}
                            onClick={()=>dispatch(Remove(ele))}
                          >
                            -
                          </Button>
                        }
                      />
                      
                    </ButtonGroup>
                  </div>
                </Grid>
            </>
          )
        })
      }
      </Grid>
      </>
  )
}

export default Showcart;
