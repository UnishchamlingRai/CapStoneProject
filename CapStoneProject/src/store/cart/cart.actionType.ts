import { CatetoryItems } from "../categories/categories.actionType";
export enum CART_ACTION_TYPE{
    SET_CART_ITEMS= "SET_CART_ITEMS",
    SET_CART_OPEN= "SET_CART_OPEN",
  };

  export type CartItem=CatetoryItems &{
    quantity:number
  }