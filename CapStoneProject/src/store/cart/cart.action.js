// import { CART_ACTION } from "./cart.actionType"
import { CART_ACTION_TYPE } from "./cart.actionType";

const addNewCart = (cartItem, addToCart) => {
  const itemsExists = cartItem.find((Items) => Items.id === addToCart.id);

  if (itemsExists) {
    return cartItem.map((items) =>
      items.id === addToCart.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  return [...cartItem, { ...addToCart, quantity: 1 }];
};


const removeingItems = (cartItem,cartToRemoveItems) => {
    const exitingItems = cartItem.find((item) => {
      return item.id === cartToRemoveItems.id;
    });

    if (exitingItems.quantity === 1) {
      return cartItem.filter((item) => item.id !== cartToRemoveItems.id);
    }
  
    return cartItem.map((item) => {
      return item.id === cartToRemoveItems.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  };


  const clearCartItemsFromCheckOut = (cartItem,cartToClear) => {
    const existingCartItem = cartItem.find(
      (items) => items.id === cartToClear.id
    );
  
    return cartItem.filter((item) => item.id !== existingCartItem.id);
  };

export const addItemsToCart = (cartItem, addToCart) => {
  let cartItems = addNewCart(cartItem, addToCart);
  return {
    type: CART_ACTION_TYPE.SET_CART_ITEMS,
    payload: cartItems,
  };
};

export const removeCartItems = (cartItem,cartToRemoveItems) => {
    let cartItems = removeingItems(cartItem,cartToRemoveItems);
    return {
        type: CART_ACTION_TYPE.SET_CART_ITEMS,
        payload: cartItems,
      };
  };


export  const clearCartItems = (cartItem,cartToClear) => {
    let cartItems = clearCartItemsFromCheckOut(cartItem,cartToClear);
    return {
        type: CART_ACTION_TYPE.SET_CART_ITEMS,
        payload: cartItems,
      };
  };

//   const newCartTotalPrice = currentCartItmes.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );

//   const newCartCount = currentCartItmes.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );

export const SET_CART_OPEN_ACTION = (bollen) => {
  return {
    type: CART_ACTION_TYPE.SET_CART_OPEN,
    payload: bollen,
  };
};
