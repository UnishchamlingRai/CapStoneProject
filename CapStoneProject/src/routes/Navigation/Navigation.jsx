import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CorwnLog from '../../assets/007 crown.svg'
import './Navigation.scss'
const Navigation = () => {
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
                <Link className='nav-link' to={'/auth'}>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet/>
      </>
    );
  };

export default Navigation