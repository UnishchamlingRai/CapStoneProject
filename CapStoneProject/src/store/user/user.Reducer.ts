import { type } from "os"
import { USER_ACTION_TYPE } from "./user.actionType"
import { UserAction } from "./user.action"
import { UserData } from "../../utils/firebase/firebase"
export type InitialState={
   readonly currentUser:UserData|null,
   readonly isLoading:boolean,
   readonly error:Error |null
}

let initialState:InitialState={
    currentUser:null,
    isLoading:false,
    error:null
}

export const userReducer=(state=initialState,action={} as UserAction)=>{
    // console.log("STATE OF REDUCER FUNCTION:",state)
    // console.log('ACTION:',action)
    // const{type,payload}=action
    

    switch(action.type){
        case USER_ACTION_TYPE.SET_CURRENT_USER: 
        return {...state,currentUser:action.payload}

        case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return {...state,currentUser:action.payload}

        case USER_ACTION_TYPE.SIGN_IN_FAILED:{
            return {...state, error:action.payload}
        }

        case USER_ACTION_TYPE.SIGN_UP_SUCCESS: 
        return {...state,currentUser:null}

        case USER_ACTION_TYPE.SIGNOUT_FAILED: 
        return {...state,error:action.payload}


        default:
       return state
    }

}