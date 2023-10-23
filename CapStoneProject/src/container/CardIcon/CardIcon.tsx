import React from "react";
import shopicon from "../../assets/004 shopping-bag.svg";
import "./CardIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART_OPEN_ACTION } from "../../store/cart/cart.action";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";

const CardIcon = () => {
  const iscartOpen=useSelector(selectIsCartOpen)
  const cartcount=useSelector(selectCartCount)
  const dispatch=useDispatch()
  const carttoggleHandler=()=>{
    dispatch(SET_CART_OPEN_ACTION(!iscartOpen))
  }

  return (
    <div>
      <div className="cart-icon-container" onClick={carttoggleHandler}>
        <img src={shopicon} className="shopping-icon" />
        <span className="item-count">{cartcount}</span>
      </div>
    </div>
  );
};

export default CardIcon;
