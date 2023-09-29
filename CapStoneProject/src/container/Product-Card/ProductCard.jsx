import React from 'react'
import DefaultButton from '../DefaultButton/DefaultButton'
import './ProductCard.scss'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../../store/cart/cart.action'
import {useSelector} from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
const ProductCard = ({product}) => {
    const{imageUrl,name,price}=product
    const dispatch=useDispatch()
    const cartItems=useSelector(selectCartItems)
   


    const addProductToCart=()=>{
      console.log("hello")
      dispatch(addItemsToCart(cartItems,product))
    }
  return (
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <DefaultButton buttonType='inverted'  onClick={addProductToCart}>Add to card </DefaultButton>
  </div>
  )
}

export default ProductCard