// import { CART_ACTION } from "./cart.actionType"
import { CART_ACTION_TYPE } from "./cart.actionType";
import {CartItem} from './cart.actionType'
import { actionTypeWithPayload,action, createAction } from "../createAction";

const addNewCart = (cartItem:CartItem[], addToCart:CartItem):CartItem[] => {
  console.log("Cart Items",cartItem)
  console.log("Cart AddtoCart",addToCart)
  const itemsExists = cartItem.find((Items:CartItem) => Items.id === addToCart.id);

  if (itemsExists) {
    return cartItem.map((items) =>
      items.id === addToCart.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  return [...cartItem, { ...addToCart, quantity: 1 }];
};


const removeingItems = (cartItem:CartItem[],cartToRemoveItems:CartItem):CartItem[] => {
    const exitingItems = cartItem.find((item) => {
      return item.id === cartToRemoveItems.id;
    });

    if (exitingItems && exitingItems.quantity === 1) {
      return cartItem.filter((item) => item.id !== cartToRemoveItems.id);
    }
  
    return cartItem.map((item) => {
      return item.id === cartToRemoveItems.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  };


  const clearCartItemsFromCheckOut = (cartItem:CartItem[],cartToClear:CartItem) => {
    const existingCartItem = cartItem.find(
      (items) => items.id === cartToClear.id
    );
  
   if(existingCartItem){
    return cartItem.filter((item) => item.id !== existingCartItem.id);
   }
  };



type SetCartIems =actionTypeWithPayload<CART_ACTION_TYPE.SET_CART_ITEMS,CartItem[]>
type SetCartOpen=actionTypeWithPayload<CART_ACTION_TYPE.SET_CART_OPEN,boolean>
type SetCartIemsOfClearItems=actionTypeWithPayload<CART_ACTION_TYPE.SET_CART_ITEMS,CartItem[]> |action<CART_ACTION_TYPE.SET_CART_ITEMS>

export type CartAction=SetCartIems | SetCartOpen 


export const addItemsToCart = (cartItem:CartItem[], addToCart:CartItem):SetCartIems => {
  let cartItems = addNewCart(cartItem, addToCart);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS,cartItems)
};

export const removeCartItems = (cartItem:CartItem[],cartToRemoveItems:CartItem):SetCartIems => {
    let cartItems = removeingItems(cartItem,cartToRemoveItems);
  return  createAction(CART_ACTION_TYPE.SET_CART_ITEMS,cartItems)
  };


export  const clearCartItems = (cartItem:CartItem[],cartToClear:CartItem):SetCartIemsOfClearItems => {
    let cartItems = clearCartItemsFromCheckOut(cartItem,cartToClear);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS,cartItems)
  };

//   const newCartTotalPrice = currentCartItmes.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );

//   const newCartCount = currentCartItmes.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );

export const SET_CART_OPEN_ACTION = (bollen:boolean):SetCartOpen => {
  return createAction(CART_ACTION_TYPE.SET_CART_OPEN,bollen)
};
