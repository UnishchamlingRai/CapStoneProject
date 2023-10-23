import React from 'react'
import './FormInput.scss'
import { InputHTMLAttributes,FC } from 'react'
import { type } from 'os'
type FormInputProps={label:string}&InputHTMLAttributes<HTMLInputElement>
const FormInput:FC<FormInputProps> = ({label,...otherprops}) => {
  return (
    <div className='group'>
        {label &&  <label className={`${otherprops.value==="string" && otherprops.value.length ? "shrink":""} form-input-label`} htmlFor="">{label}</label>}
            <input className={`form-input`} {...otherprops}/>
    </div>
  )
}

export default FormInput