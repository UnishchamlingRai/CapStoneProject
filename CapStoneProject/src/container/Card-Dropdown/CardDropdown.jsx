import React from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import "./CardDropdown.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartItems from "../Cart-Items/CartItems";
import { useNavigate } from "react-router-dom";
// import CartItems from "../Cart-Items/CartItems";
const CardDropdown = () => {
  const navigate = useNavigate();
  const { currentCartItmes } = useContext(CartContext);
  console.log("Current Name of CardDeropDown:", currentCartItmes);
  // console.log("Current Name of CardDeropDown:")
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {currentCartItmes.map((items, index) => {
          console.log("Items: ",items)
          return (
           <CartItems cartitems={items} key={index}/>
          );
        })}
      </div>
      <DefaultButton onClick={()=>{navigate('/checkout')}}>GO TO CHECKOUT</DefaultButton>
    </div>
  );
};

export default CardDropdown;
