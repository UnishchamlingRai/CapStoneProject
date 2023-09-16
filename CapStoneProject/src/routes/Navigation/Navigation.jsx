import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CorwnLog from '../../assets/007 crown.svg'
import './Navigation.scss'
import { UserContext } from '../../UserContext/userContext'
import { useContext } from 'react'
import { UsersignOut } from '../../utils/firebase/firebase'
const Navigation = () => {
  const {currentUser}=useContext(UserContext)
  console.log(currentUser)
  
  

  
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
            </div>
        </div>
        <Outlet/>
      </>
    );
  };

export default Navigation