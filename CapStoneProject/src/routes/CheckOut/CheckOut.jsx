import React from 'react'
import './CheckOut.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import CheckOutItems from '../../container/CheckOutItems/CheckOutItems'
const CheckOut = () => {
  const{cartTotalPrice,currentCartItmes}=useContext(CartContext)
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
      {currentCartItmes.map((items) => (
        <CheckOutItems key={items.id} items={items} />
      ))}
      <div className='total'>TOTAL: ${cartTotalPrice}</div>
    </div>
  )
}

export default CheckOut