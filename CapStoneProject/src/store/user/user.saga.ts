import {takeLatest,put,all,call} from 'typed-redux-saga'

import { USER_ACTION_TYPE } from './user.actionType'
import { User } from 'firebase/auth'
import { signInSuccess,signInFailed,signUpSuccess,signUpFailed, SignUpStarted, SignUpSuccess } from './user.action'

import { AuthsignInWithEmailAndPassword, UsersignOut, createUserAuthWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup } from '../../utils/firebase/firebase'
import { EmailSignInStart } from './user.action'





export function* getSnapshotFromUserAuth(userAuth:User,addiionalDetails?:any){
    try {
        const userSnapShot=yield* call(createUserDocumentFromAuth,userAuth,addiionalDetails)
       
        if(userSnapShot){
            yield* put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
        }
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth=yield* call(getCurrentUser)
        if(!userAuth) return;
        yield* call(getSnapshotFromUserAuth,userAuth)
    } catch (error) {
        yield* put(signInFailed(error as Error))
        
    }
}


//sign in with google user function
export function* signInWithGoogleUser (){
    try {
     let {user} = yield* call(signInWithGooglePopup);
     yield* call(getSnapshotFromUserAuth,user)
     console.log("Sign In With Google  user:",user)
    } catch (error) {
     yield* put(signInFailed(error as Error))
     
    }
 }

export function* signInWithEmailAndPasswordUser(action:EmailSignInStart){
    console.log("Action Called")
    const{email, password}=action.payload
    console.log("email And Passowr",email,password)
    let userCredintial = yield* call(AuthsignInWithEmailAndPassword,email, password);
   if(userCredintial){
    const {user}:any=userCredintial
    yield* call(getSnapshotFromUserAuth,user)
}
   }


export function* signUp(action:SignUpStarted){
    const{email, password,displayName}=action.payload
    try {
        const {user}:any =yield* call(createUserAuthWithEmailAndPassword,email,password)
        const {name}=user
        console.log("Sign Up from Saga: with user",user)
        console.log("users:",name)
       yield* put(signUpSuccess(user,displayName))
    } catch (error) {
        yield* put(signUpFailed(error as Error))
    }
}

export function* signInAfterSignUp(action:SignUpSuccess){
    console.log("Action :",action)
    const{user,additionalInfo}=action.payload

    console.log("Addidtional Information:",user,additionalInfo.displayName)
    yield* call(getSnapshotFromUserAuth,user,additionalInfo.displayName)

}

export function* signOut(){ 
    
    try {
        yield* call(UsersignOut)
        yield* put(signInSu ccess())
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* onCheckUserSession(){
    yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated)
}



export function* ongoogleSignInStart(){
    yield* takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogleUser)
}



export function* onEmailSignInStart(){
    yield* takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmailAndPasswordUser)
}


export function* onsignUpStarted(){
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_STARTED,signUp)
}

export function* onSignUpSuccess(){
    console.log("onSignUpSuccess called...")
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onSignOutStarted(){
    yield* takeLatest(USER_ACTION_TYPE.SIGNOUT_STARTED,signOut)
}
export function* userSagas(){
    yield* all([call(onCheckUserSession),call(ongoogleSignInStart),call(onEmailSignInStart),call(onSignUpSuccess),call(onsignUpStarted),call(onSignOutStarted)])
}