import { CartAction } from "./cart.action";
import { CART_ACTION_TYPE } from "./cart.actionType";
import {CartItem} from "./cart.actionType";
export type CartInitialState={
  iscartOpen:false;
  cartItems:CartItem[];
}

let CART_INITIAL_STATE:CartInitialState = {
    iscartOpen: false,
    cartItems: []
  };

export const cartReducer = (state=CART_INITIAL_STATE, action={} as CartAction) => {
   
    switch (action.type) {
      case CART_ACTION_TYPE.SET_CART_ITEMS:
        return { ...state, cartItems:action.payload };
      case CART_ACTION_TYPE.SET_CART_OPEN:
        return { ...state, iscartOpen: action.payload };
      default:
        return state
    }
  };

//   console.log("THIS IS PAYLOAD : ", { ...payload });