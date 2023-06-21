const Cart_Products = {
  Cart: [],
};

export const cartreducer = (state = Cart_Products, action) => {
  switch (action.type) {
    case "ADD_CART":
      console.log("Cart_Products", Cart_Products);

      const tempCart = [...state.Cart];

      const ifExits = tempCart.find((item) => {
        return item?.id === action.payload?.id;
      });

      if (ifExits) {
        const updatedCart = tempCart.map((p) =>
          p.id === action.payload?.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        console.log("updatedCart", updatedCart);
        return { Cart: [...updatedCart] };
      } else {
        const firstTimeUpdate = { ...action.payload, ["quantity"]: 1 };

        return { Cart: [...state.Cart, firstTimeUpdate] };
      }

    case "DELETE_CART":
      const ifExits1 = state.Cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.Cart[ifExits1].quantity > 1) {
        state.Cart[ifExits1].quantity -= 1;
        return {
          ...state,
          Cart: [...state.Cart],
        };
      } else if (state.Cart[ifExits1].quantity === 1) {
        const data = state.Cart.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          Cart: data,
        };
      }

      break;
    default:
      return state;
  }
};
