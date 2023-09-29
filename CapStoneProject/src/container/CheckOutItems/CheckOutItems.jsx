import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import {useSelector,useDispatch} from 'react-redux'
import './CheckOutItems.scss'
import { addItemsToCart, clearCartItems, removeCartItems } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
const CheckOutItems = ({items}) => {
    // const{removeCartItems,addToCart,clearCartItems}=useContext(CartContext)
    // console.log("Check Items:",items)
    const cartItems=useSelector(selectCartItems)
    let dispatch=useDispatch()
    const{imageUrl,name,price,quantity,id}=items

    const clearItemHandler=()=>dispatch(clearCartItems(cartItems,items))
    const removeItemHandler=()=>dispatch(removeCartItems(cartItems,items))
    const addItemHandler=()=>dispatch(addItemsToCart(cartItems,items))

  return (
   <>
  <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
   </>
  )
}

export default CheckOutItems