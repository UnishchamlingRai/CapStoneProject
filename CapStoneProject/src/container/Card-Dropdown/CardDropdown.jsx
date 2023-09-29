import React from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import "./CardDropdown.scss";
import CartItems from "../Cart-Items/CartItems";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
// import CartItems from "../Cart-Items/CartItems";
const CardDropdown = () => {
  const navigate = useNavigate();
  const cartitems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((items, index) => {
          // console.log("Items: ", items);
          return <CartItems cartItems={items} key={index} />;
        })}
      </div>
      <DefaultButton
        onClick={() => {
          navigate("/checkout");
        }}
      >
         CHECKOUT
      </DefaultButton>
    </div>
  );
};

export default CardDropdown;
