// import {  createContext,useEffect,useReducer,useState } from "react";
// import {  onAuthStateChangedListner,createUserDocumentFromAuth } from "../utils/firebase/firebase";




// export const SET_CURRENT_USER={
//     SET_CURRENT_USER:"SET_CURRENT_USER"
// }


// let INITAIL_STATE={
//     currentUser:null,
//     name:"Unish",
//     address:"Gaighat"
// }
// export const UserContext=createContext({
// currentUser:null,
// setCurrentUser:()=>null
// })
// console.log("UserContext:",UserContext)
// export const UserProvider=({children})=>{
   
//     useEffect(()=>{
//         let unsuscribe=onAuthStateChangedListner((user)=>{
//             setCurrentUser(user)
//             if(user){
//                 createUserDocumentFromAuth(user);
//             }
//             console.log("Listner User: ",user)

//         })

//         console.log("Unsuscribe:",unsuscribe)

//         return unsuscribe

//     },[])
    
//     const[{currentUser},dispatch]=useReducer(reducer,INITAIL_STATE)
    
//     const setCurrentUser=(user)=>{
//         dispatch({type:SET_CURRENT_USER.SET_CURRENT_USER,payload:user})

//     }
//     const value={currentUser,setCurrentUser}
// console.log("Value of Context: ",value)
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }