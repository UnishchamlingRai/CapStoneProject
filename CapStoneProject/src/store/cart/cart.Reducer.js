import { CART_ACTION_TYPE } from "./cart.actionType";


let CART_INITIAL_STATE = {
    iscartOpen: false,
    cartItems: []
  };

export const cartReducer = (state=CART_INITIAL_STATE, action={}) => {
    let { type, payload } = action;
    switch (type) {
      case CART_ACTION_TYPE.SET_CART_ITEMS:
        return { ...state, cartItems:payload };
      case CART_ACTION_TYPE.SET_CART_OPEN:
        return { ...state, iscartOpen: payload };
      default:
        return state
    }
  };

//   console.log("THIS IS PAYLOAD : ", { ...payload });