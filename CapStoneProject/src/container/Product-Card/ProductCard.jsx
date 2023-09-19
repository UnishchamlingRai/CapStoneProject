import React from 'react'
import DefaultButton from '../DefaultButton/DefaultButton'
import './ProductCard.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
const ProductCard = ({product}) => {
    const{imageUrl,name,price}=product
    const{addToCart}=useContext(CartContext)
    // const{cartItemsBuyNumber,setCartItemsBuyNumber}=useContext(CartContext)
    const addProductToCart=()=>{
      addToCart(product)
      // setCartItemsBuyNumber(cartItemsBuyNumber+1)
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