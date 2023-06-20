// // import { actiontypes } from "../contants/actiontypes";
// // const cart = [];

// //  const handleCart = (state = cart, action) => {
// //   const product = action.payload;
// //   switch (action.type) {
// //     case actiontypes.ADD_CART:
// //       //Check if product is already Exist
// //       const exist = state.find((x) => x.id === product.id);
// //       if (exist) {
// //         //increase the quantity
// //         const qnty = exist.qty+=1
// //         return 
// //           {
// //             cart:[...state,qnty]
// //           }
        
// //       } else {
// //         const product = action.payload;
// //         return [
// //           ...state,
// //           {
// //             ...product,
// //             qty: 1,
// //           },
// //         ];
// //       }
// //     case actiontypes.DELETE_CART:
// //       const exist1=state.find((x)=>x.id===product.id);
// //       if(exist1.qty===1){
// //         return state.filter((x)=>x.id!==exist1.id);
// //       }else{
// //         return state.map((x)=>
// //         x.id===product.id ?{...x,qty:x.qty-1}:x
// //         );
// //       }
// //     default:
// //       return state;
// //   }
// // };

// // export default handleCart;

// const Cart_Products={
//   Cart:[]
// }

//   const cartreducer=(state=Cart_Products,action)=>{
//   switch (action.type){
//   case "Addcart":
//   const No_cart = state.Cart.findIndex((item)=>item.id===action.payload.id)
//   if(No_cart>=0){
//   state.Cart[No_cart].qnty+=1
//   return{
//       ...state,
//       Cart:[...state.Cart]
//   }
//   }else{
//       const inp_qnty={...action.payload,qnty:1}
//       return{
//           ...state,
//           Cart:[...state.Cart,inp_qnty]
//       }
//   }
//   case "Removecart":
//   const No_cart1 = state.Cart.findIndex((item)=>item.id===action.payload.id)
//       if(state.Cart[No_cart1].qnty>1){
//           state.Cart[No_cart1].qnty-=1
//           return{
//               ...state,
//               Cart:[...state.Cart]
//           }
//           }else if(state.Cart[No_cart1].qnty===1){
//               const data = state.Cart.filter((el)=>el.id !== action.payload.id);
//               return{
//                   ...state,
//                   Cart:data
//               }

//           }   
//           break;
//   default:
//       return state;
      
// }
// }

// export default cartreducer;