import React from 'react'
import './CheckOut.scss'
import CheckOutItems from '../../container/CheckOutItems/CheckOutItems'
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
const CheckOut = () => {
  // const{cartTotalPrice,currentCartItmes}=useContext(CartContext)
  const cartItems=useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal);
  // console.log("CheckOut:",currentCartItmes)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((items) => (
        <CheckOutItems key={items.id} items={items} />
      ))}
      <div className='total'>TOTAL: $ {cartTotal}</div>
    </div>
  )
}

export default CheckOut