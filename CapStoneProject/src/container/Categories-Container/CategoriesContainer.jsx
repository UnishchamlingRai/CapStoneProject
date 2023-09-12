import React from 'react'
import CategoriesItems from '../Categories-Items/CategoriesItems'
import './CategoriesContaner.scss'
const CategoriesContainer = ({catagories}) => {
  return (
    <div className='categories-container'>
      {catagories.map((category,index)=>{
        return <CategoriesItems category={category} key={index}/>
      })}

    </div>
  )
}

export default CategoriesContainer