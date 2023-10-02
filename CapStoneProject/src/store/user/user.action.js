import { USER_ACTION_TYPE } from "./user.actionType"
export const setCurrentUser=(user)=>{
    // dispatch({type:SET_CURRENT_USER.SET_CURRENT_USER,payload:user})
    return {
        type:USER_ACTION_TYPE.SET_CURRENT_USER,
        payload:user
    }

}


// SET_CURRENT_USER:"user/SET_CURRENT_USER",
//     CHECK_USER_SESSION:'user/CHECK_USER_SESSION',
//     GOOGLE_SIGN_IN_START:'user/GOOGLE_SIGN_IN_START',
//     EMAIL_SIGN_IN_START:'user/EMAIL_SIGN_IN_START',
//     SIGN_IN_SUCCESS:'user/SIGN_IN_SUCCESS',
//     SIGN_IN_FAILED:'user/SIGN_IN_FAILED'

export const checkUserSession=()=>{
    return{
        type:USER_ACTION_TYPE.CHECK_USER_SESSION,
    }
}

export const googleSignInStart=()=>{
    console.log('googleSignInStart called....')
    return{
        type:USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,
    }
}

export const emailSignInStart=(email,password)=>{
    return{
        type:USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
        payload:{email,password}
    }
}

export const signInSuccess=(user)=>{
    
    return{
        type:USER_ACTION_TYPE.SIGN_IN_SUCCESS,
        payload:user
    }
}

export const signInFailed=(error)=>{
    return{
        type:USER_ACTION_TYPE.SIGN_IN_FAILED,
        payload:error
    }
}


// SIGN_UP_STARTED:'user/SIGN_UP_STARTED',
//     SIGN_UP_SUCCESS:'user/SIGN_UP_SUCCESS',
//     SIGN_UP_FAILED:'user/SIGN_UP_FAILED',

export const signUpStarted=(email,password,displayName)=>{
    console.log("Sign Up Startedd Called...")
    return{
        type:USER_ACTION_TYPE.SIGN_UP_STARTED,
        payload:{email,password,displayName}
    }
}

export const signUpSuccess=(user,additionalInfo)=>{
    console.log("SignUp Success calledd......",user)
    console.log("additional info...",additionalInfo)
    return{
        type:USER_ACTION_TYPE.SIGN_UP_SUCCESS,
        payload:{user,additionalInfo}
    }
}

export const signUpFailed=(error)=>{
    return{
        type:USER_ACTION_TYPE.SIGN_UP_FAILED,
        payload:error
    }
}


// SIGNOUT_STARTED:"user/SIGNOUT_STARTED",
//     SIGNOUT_SUCCSESS:"user/SIGNOUT_SUCCSESS",
//     SIGNOUT_FAILED:"user/SIGNOUT_FAILED"

export const signOutStarted=()=>{
    console.log("SignOut Started Calleddxxxx",signOutStarted)
    return{
        type:USER_ACTION_TYPE.SIGNOUT_STARTED
    }
}

export const signOutSuccess=()=>{
    return{
        type:USER_ACTION_TYPE.SIGNOUT_SUCCSESS
    }
}

export const signOutFailed=(error)=>{
    return{
        type:USER_ACTION_TYPE.SIGNOUT_FAILED,
        payload:error
    }
}