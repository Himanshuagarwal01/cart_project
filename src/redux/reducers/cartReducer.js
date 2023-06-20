// import { actiontypes } from "../contants/actiontypes";
// const cart = [];

//  const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case actiontypes.ADD_CART:
//       //Check if product is already Exist
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         //increase the quantity
//         const qnty = exist.qty+=1
//         return
//           [...state,
//             {qnty}]

//       } else {
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//     case actiontypes.DELETE_CART:
//       const exist1=state.find((x)=>x.id===product.id);
//       if(exist1.qty===1){
//         return state.filter((x)=>x.id!==exist1.id);
//       }else{
//         return state.map((x)=>
//         x.id===product.id ?{...x,qty:x.qty-1}:x
//         );
//       }
//     default:
//       return state;
//   }
// };

// export default handleCart;

const Cart_Products = {
  Cart: [],
  quantity: 0,
};

export const cartreducer = (state = Cart_Products, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_CART":
      // console.log('action.payload', action.payload);
      // console.log('state.Cart', action.payload);
      console.log("Cart_Products", Cart_Products);

      const tempCart = [...state.Cart];

      const ifExits = tempCart.find((item) => {
        return item?.id === action.payload?.id;
      });
      // for()

      console.log("ifExits", ifExits);

      if (ifExits) {
        let tempCart = { ...state.Cart, ...action.payload, quantity: 1 };

        tempCart = { ...tempCart, quantity: state.quantity +=tempCart.quantity };

        console.log("tempCart", tempCart);



      } else {
        let tempCart = { ...state.Cart, ...action.payload, quantity: 1 };
        return tempCart
      }

      // console.log('No_cart',No_cart);

      // console.log(state.Cart);
      // // console.log(No_cart);
      // // console.log(state.Cart);
      // // state.Cart = [...state.Cart, {}];
      // // state.Cart = [...state.Cart, {qnty: state.Cart.qnty+1}];

      return {
        ...state,
        Cart: [...state.Cart, action.payload],
      };

    // else {
    //   const inp_qnty = { ...action.payload, qnty: 1 };
    //   return {
    //     ...state,
    //     Cart: [...state.Cart, inp_qnty],
    //   };
    // }

    // case "DELETE_CART":
    //   const No_cart1 = state.Cart.find((item) => item.id === action.payload.id);
    //   if (state.Cart[No_cart1].qnty > 1) {
    //     state.Cart[No_cart1].qnty -= 1;
    //     return {
    //       ...state,
    //       Cart: [...state.Cart],
    //     };
    //   } else if (state.Cart[No_cart1].qnty === 1) {
    //     const data = state.Cart.filter((el) => el.id !== action.payload.id);
    //     return {
    //       ...state,
    //       Cart: data,
    //     };
    //   }
    //   break;
    default:
      return state;
  }
};
