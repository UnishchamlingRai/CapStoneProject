import {takeLatest,put,all,call} from 'redux-saga/effects'

import { USER_ACTION_TYPE } from './user.actionType'

import { signInSuccess,signInFailed,signUpSuccess,signUpFailed } from './user.action'

import { AuthsignInWithEmailAndPassword, UsersignOut, createUserAuthWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup } from '../../utils/firebase/firebase'






export function* getSnapshotFromUserAuth(userAuth,addiionalDetails){
    try {
        const userSnapShot=yield call(createUserDocumentFromAuth,userAuth,addiionalDetails)
        console.log("userSnapShot:",userSnapShot)
        console.log("userSnapShot:",userSnapShot.data())
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth=yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth,userAuth)
    } catch (error) {
        yield put(signInFailed(error))
        
    }
}


//sign in with google user function
export function* signInWithGoogleUser (){
    try {
     let {user} = yield call(signInWithGooglePopup);
     yield call(getSnapshotFromUserAuth,user)
     console.log("Sign In With Google  user:",user)
    } catch (error) {
     yield put(signInFailed(error))
     
    }
 }

export function* signInWithEmailAndPasswordUser(action){
    console.log("Action Called")
    const{email, password}=action.payload
    console.log("email And Passowr",email,password)
    let {user} = yield call(AuthsignInWithEmailAndPassword,email, password);
    yield call(getSnapshotFromUserAuth,user)
}


export function* signUp(action){
    const{email, password,displayName}=action.payload
    try {
        const {user} =yield call(createUserAuthWithEmailAndPassword,email,password)
        const {name}=user
        console.log("Sign Up from Saga: with user",user)
        console.log("users:",name)
       yield put(signUpSuccess(user,{displayName}))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignUp(action){
    console.log("Action :",action)
    const{user,additionalInfo}=action.payload

    console.log("Addidtional Information:",user,additionalInfo.displayName)
    yield call(getSnapshotFromUserAuth,user,additionalInfo.displayName)

}

export function* signOut(){
    
    try {
        yield call(UsersignOut)
        yield put(signInSuccess())
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated)
}



export function* ongoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogleUser)
}



export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmailAndPasswordUser)
}


export function* onsignUpStarted(){
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_STARTED,signUp)
}

export function* onSignUpSuccess(){
    console.log("onSignUpSuccess called...")
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onSignOutStarted(){
    yield takeLatest(USER_ACTION_TYPE.SIGNOUT_STARTED,signOut)
}
export function* userSagas(){
    yield all([call(onCheckUserSession),call(ongoogleSignInStart),call(onEmailSignInStart),call(onSignUpSuccess),call(onsignUpStarted),call(onSignOutStarted)])
}