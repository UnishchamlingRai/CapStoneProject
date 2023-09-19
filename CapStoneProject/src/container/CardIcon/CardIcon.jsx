import React from "react";
import shopicon from "../../assets/004 shopping-bag.svg";
import "./CardIcon.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
const CardIcon = () => {
  const {iscartOpen,setCartOpen,cartCount}=useContext(CartContext)
  const carttoggleHandler=()=>{
    setCartOpen(!iscartOpen)
  }

  return (
    <div>
      <div className="cart-icon-container" onClick={carttoggleHandler}>
        <img src={shopicon} className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default CardIcon;
