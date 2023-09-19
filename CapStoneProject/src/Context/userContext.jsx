import {  createContext,useEffect,useState } from "react";
import {  onAuthStateChangedListner,createUserDocumentFromAuth } from "../utils/firebase/firebase";

//as the actual value you want to access

export const UserContext=createContext({
currentUser:null,
setCurrentUser:()=>null
})
console.log("UserContext:",UserContext)
export const UserProvider=({children})=>{
   
    useEffect(()=>{
        let unsuscribe=onAuthStateChangedListner((user)=>{
            setCurrentUser(user)
            if(user){
                createUserDocumentFromAuth(user);
            }
            console.log("Listner User: ",user)

        })

        console.log("Unsuscribe:",unsuscribe)

        return unsuscribe

    },[])
    const[currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}
console.log("Value of Context: ",value)
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}