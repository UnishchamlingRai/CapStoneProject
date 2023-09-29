import { SET_CURRENT_USER } from "./user.actionType"
let initialState={
    currentUser:null
}

export const userReducer=(state=initialState,action)=>{
    // console.log("STATE OF REDUCER FUNCTION:",state)
    // console.log('ACTION:',action)
    const{type,payload}=action
    

    switch(type){
        case SET_CURRENT_USER.SET_CURRENT_USER: 
        return {...state,currentUser:payload}
        default:
       return state
    }

}