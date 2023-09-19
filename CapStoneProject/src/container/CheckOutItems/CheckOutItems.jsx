import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import './CheckOutItems.scss'
const CheckOutItems = ({items}) => {
    const{removeCartItems,addToCart,clearCartItems}=useContext(CartContext)
    console.log("Check Items:",items)
    const{imageUrl,name,price,quantity,id}=items

    const clearItemHandler=()=>clearCartItems(items)
    const removeItemHandler=()=>removeCartItems(items)
    const addItemHandler=()=>addToCart(items)
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