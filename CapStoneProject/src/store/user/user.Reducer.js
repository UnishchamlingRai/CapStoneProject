import { USER_ACTION_TYPE } from "./user.actionType"
let initialState={
    currentUser:null,
    isLoading:false,
    error:null
}

export const userReducer=(state=initialState,action)=>{
    // console.log("STATE OF REDUCER FUNCTION:",state)
    // console.log('ACTION:',action)
    const{type,payload}=action
    

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER: 
        return {...state,currentUser:payload}

        case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return {...state,currentUser:payload}

        case USER_ACTION_TYPE.SIGN_IN_FAILED:{
            return {...state, error:payload}
        }

        case USER_ACTION_TYPE.SIGN_UP_SUCCESS: 
        return {...state,currentUser:null}

        case USER_ACTION_TYPE.SIGNOUT_FAILED: 
        return {...state,error:payload}


        default:
       return state
    }

}