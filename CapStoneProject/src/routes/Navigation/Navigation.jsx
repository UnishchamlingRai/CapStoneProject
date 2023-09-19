import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CorwnLog from '../../assets/007 crown.svg'
import './Navigation.scss'
import { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { CartContext } from '../../Context/cartContext'


import { UsersignOut } from '../../utils/firebase/firebase'
import CardIcon from '../../container/CardIcon/CardIcon'
import CardDropdown from '../../container/Card-Dropdown/CardDropdown'

const Navigation = () => {
  const {currentUser}=useContext(UserContext)
  // console.log(currentUser)

  const {iscartOpen}=useContext(CartContext)
  
  

  
    return (
      <>
        <div className='navigation'>
            <Link className='logo-container' to={'/'}>
               <img src={CorwnLog} alt="" className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to={'/shop'}>
                    Shop
                </Link>
               {currentUser?(
                
                <span onClick={UsersignOut}> Sign Out {currentUser.email && currentUser.email}</span>
       
               ):(
                <Link className='nav-link' to={'/auth'}>
                Sign In 
            </Link>
               )}
               <CardIcon />
            </div>
            {iscartOpen&&<CardDropdown />}
        </div>
        <Outlet/>
      </>
    );
  };

export default Navigation