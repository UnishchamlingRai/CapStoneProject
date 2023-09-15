import React from 'react'
// import getRedirect from 'firebase/firebase'
import './Authentication.scss'

import SingUpForm from '../../container/SignUpForm/SingUpForm'
import SingInForm from '../../container/SignInForm/SignInForm'

const Authentication = () => {
  
  return (
    <div className='auth-container'>
      <SingInForm />
        <SingUpForm />
        
    </div>
  )
}

export default Authentication