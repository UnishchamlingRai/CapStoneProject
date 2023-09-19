import React from 'react'
import './CategoryPreview.scss'
import ProductCard from '../Product-Card/ProductCard'
import { Link } from 'react-router-dom'
const CategoryPreview = ({product,title}) => {
 
    console.log("PRODUCT FROM DB:",product)
    console.log("TITLE FROM DB:",title)

    const filteredProduct=product.filter((product,index)=>index<4)
    console.log("filteredProduct FILEDLJ:",filteredProduct)
  return (
    <div className='category-preview-container'>
        <h1 className='title'><Link to={title}>{title.toUpperCase()}</Link></h1>
        <div className='preview'>
            {filteredProduct.map((product)=>{
               return  <ProductCard product={product} key={product.id}/>
            })}
        </div>
    </div>
  )
}

export default CategoryPreview