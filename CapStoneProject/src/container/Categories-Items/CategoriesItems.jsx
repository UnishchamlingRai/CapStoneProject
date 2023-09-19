import React from 'react'
import './CategoriesItems.scss'
import {useNavigate} from 'react-router-dom'
const CategoriesItems = ({category}) => {
  const{id,title,imageUrl}=category
  const navigate=useNavigate()

  const navigatorHandler=(event)=>{
    navigate(`/shop/${title}`)
    console.log(event)

  }
  return (
    <div className='category-container' onClick={navigatorHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoriesItems