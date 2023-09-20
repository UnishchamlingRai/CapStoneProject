import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext({
  iscartOpen: false,
  setCartOpen: () => null,
  currentCartItmes: [],
  addToCart: () => {},
  cartCount: 0,
  setCartCount: () => null,
  removeCartItems: () => {},
  clearCartItems: () => {},
  cartTotalPrice: 0,
  setCartTotalPrice: () => {},
});

const CheckaddNewCart = (currentCartItmes, addedCart) => {
  const existingCartItem = currentCartItmes.find(
    (items) => items.id === addedCart.id
  );
//   console.log("IsExit:", existingCartItem);

  if (existingCartItem) {
    return currentCartItmes.map((items) =>
      items.id === addedCart.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  return [...currentCartItmes, { ...addedCart, quantity: 1 }];
};

//Removing Items
const removeingItems = (cartToRemoveItems, currentCartItmes) => {
  const exitingItems = currentCartItmes.find((item) => {
    return item.id === cartToRemoveItems.id;
  });
  if (exitingItems.quantity === 1) {
    return currentCartItmes.filter((item) => item.id !== cartToRemoveItems.id);
  }

  return currentCartItmes.map((item) => {
    return item.id === cartToRemoveItems.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const clearCartItemsFromCheckOut = (cartToClear, currentCartItmes) => {
  const existingCartItem = currentCartItmes.find(
    (items) => items.id === cartToClear.id
  );

  return currentCartItmes.filter((item) => item.id !== existingCartItem.id);
};
//REDUCER INITIAL STATE
let INITIAL_STATE = {
  iscartOpen: false,
  currentCartItmes: [],
  cartCount: 0,
  cartTotalPrice: 0,
};
//ACTION TYPE
export const CART_ACTION = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

//REDUCER FUNTION
const cartReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case CART_ACTION.SET_CART_ITEMS:
      console.log("THIS IS PAYLOAD : ", { ...payload });
      return { ...state, ...payload };
    case CART_ACTION.SET_CART_OPEN:
      return { ...state, iscartOpen: payload };
    default:
      return console.log("Invalid Action Type");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { currentCartItmes, cartCount, cartTotalPrice, iscartOpen } = state;

  const setCartOpen = (boolen) => {
    dispatch({ type: CART_ACTION.SET_CART_OPEN, payload: boolen });
  };

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = currentCartItmes.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotalPrice = currentCartItmes.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION.SET_CART_ITEMS,
      payload: {
        cartCount: newCartCount,
        cartTotalPrice: newCartTotalPrice,
        currentCartItmes: cartItems,
      },
    });
  };

  const addToCart = (addedCart) => {
    let cartItems = CheckaddNewCart(currentCartItmes, addedCart);
    updateCartItemsReducer(cartItems);
  };

  const removeCartItems = (cartToRemoveItems) => {
    let cartItems = removeingItems(cartToRemoveItems, currentCartItmes);
    updateCartItemsReducer(cartItems);
  };

  const clearCartItems = (cartToClear) => {
    let cartItems = clearCartItemsFromCheckOut(cartToClear, currentCartItmes);
    updateCartItemsReducer(cartItems);
  };

  const value = {
    iscartOpen,
    setCartOpen,
    currentCartItmes,
    addToCart,
    cartCount,
    removeCartItems,
    clearCartItems,
    cartTotalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
