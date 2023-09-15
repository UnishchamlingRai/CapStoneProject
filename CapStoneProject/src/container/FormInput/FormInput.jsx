import React from 'react'
import './FormInput.scss'
const FormInput = ({label,...otherprops}) => {
  return (
    <div className='group'>
        {label &&  <label className={`${otherprops.value.length ? "shrink":""} form-input-label`} htmlFor="">{label}</label>}
            <input className={`form-input`} {...otherprops}/>
    </div>
  )
}

export default FormInput