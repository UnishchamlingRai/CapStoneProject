import { SET_CURRENT_USER } from "./user.actionType"
export const setCurrentUser=(user)=>{
    // dispatch({type:SET_CURRENT_USER.SET_CURRENT_USER,payload:user})
    return {
        type:SET_CURRENT_USER.SET_CURRENT_USER,
        payload:user
    }

}