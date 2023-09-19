import React from 'react'
// import CategoriesContainer from '../../container/Categories-Container/CategoriesContainer'
import CategoriesContainer from '../../container/Categories-Container/CategoriesContainer';
import { Outlet } from 'react-router-dom';
// import Directory from '../../container/Categories-Container/Directory';
const Home = () => {
    
    
  return (
    <div>
        <Outlet />
        <CategoriesContainer/>
    </div>
  )
}

export default Home