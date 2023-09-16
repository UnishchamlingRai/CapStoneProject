import React, {  useState } from 'react'
import './SignUpForm.scss'
import { createUserAuthWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from '../FormInput/FormInput'
import DefaultButton from '../DefaultButton/DefaultButton'

const fromDetails={
    displayName:"",
    email:"",
    password:"",
    conformPassword:""
}
const SingUpForm = () => {

console.log("heeeeeet")

    const[formData,setFromData]=useState(fromDetails)

    const{displayName,email,password,conformPassword}=formData

    const resetFormField=()=>{
      setFromData(fromDetails)
     
    }


    const eventHandler=(event)=>{
        const{name,value}=event.target
        setFromData({...formData,[name]:value})
       
        

    }

    const submitHandler=async (event)=>{
        event.preventDefault()
        // console.log(formData)
       if(!password===conformPassword){
        alert("Password Not Match")
       }
       try {
        let response=await createUserAuthWithEmailAndPassword(email,password)
        // setCurrentUser(response)
        resetFormField()
        // console.log("Response",response)
      if(response){
       await createUserDocumentFromAuth(response,{displayName})
      }
       } catch (error) {
        if(error.code==="auth/email-already-in-use"){
          alert("User Already Exit")
        }else{
          console.log("SubmitHandler Error ",error.message)
        }
        
       }
       
       
    }
  return (
    <div className='signUP-container'>
        <div>
        <h2>Don't Have a Account </h2>
        <span>Sign Up With Your Email and Password</span>
        <form onSubmit={submitHandler}>
            <FormInput type="text" onChange={eventHandler} value={displayName} name='displayName' label={"Display Name:"}/>
            <FormInput type="text" onChange={eventHandler} value={email} name='email' label={"Email:"}/>
            <FormInput type="text" onChange={eventHandler} value={password} name='password' label={"Password:"}/>
            <FormInput type="text" onChange={eventHandler} value={conformPassword} name='conformPassword' label={"Conform passowrd:"}/>
           <DefaultButton buttonType={""} children={"SIGN UP"} />
        </form>
        </div>

        


    </div>
  )
}

export default SingUpForm