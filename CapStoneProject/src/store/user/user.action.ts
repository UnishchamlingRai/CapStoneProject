import { USER_ACTION_TYPE } from "./user.actionType";
import { UserData } from "../../utils/firebase/firebase";
import { action, actionTypeWithPayload, createAction } from "../createAction";
import { type } from "os";
import User from "firebase/auth";


type SetCurrentUser = actionTypeWithPayload<
  USER_ACTION_TYPE.SET_CURRENT_USER,
  UserData
>;
type CheckUserSession = action<USER_ACTION_TYPE.CHECK_USER_SESSION>;
type GoogleSignInStart = action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = actionTypeWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;



type SignInSuccess = actionTypeWithPayload<
USER_ACTION_TYPE.SIGN_IN_SUCCESS, UserData
>;

type SignInFailed = actionTypeWithPayload<
USER_ACTION_TYPE.SIGN_IN_FAILED, Error
>;

export type SignUpStarted = actionTypeWithPayload<
USER_ACTION_TYPE.SIGN_UP_STARTED, {
    email:string;
    password:string;
    displayName:string;
  }
>;
type AdditionalInfo={
    displayName:string
}
export type SignUpSuccess=actionTypeWithPayload<USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user:UserData, additionalInfo:any }>
type SignUpFailed = actionTypeWithPayload<USER_ACTION_TYPE.SIGN_UP_FAILED, Error
>;
type SignOutStarted = action<
USER_ACTION_TYPE.SIGNOUT_STARTED
>;
type SignOutSuccess = action<
USER_ACTION_TYPE.SIGNOUT_SUCCSESS
>;
type signOutFailed = actionTypeWithPayload<
USER_ACTION_TYPE.SIGNOUT_FAILED, Error
>;

export type UserAction=SetCurrentUser|SignInSuccess|SignInFailed|SignUpFailed|SignUpSuccess|signOutFailed
export const setCurrentUser = (user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user)

export const checkUserSession = (): CheckUserSession =>
  createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const googleSignInStart = (): GoogleSignInStart =>
  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart =>
  createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: UserData&{id:string}):SignInSuccess =>
  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error):SignInFailed =>
  createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);



export const signUpStarted = (
  email: string,
  password: string,
  displayName: string
):SignUpStarted =>
  createAction(USER_ACTION_TYPE.SIGN_UP_STARTED, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: UserData, additionalInfo: string):SignUpSuccess =>
  createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalInfo });

export const signUpFailed = (error: Error):SignUpFailed =>
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);


export const signOutStarted = ():SignOutStarted =>
  createAction(USER_ACTION_TYPE.SIGNOUT_STARTED);

export const signOutSuccess = ():SignOutSuccess =>
  createAction(USER_ACTION_TYPE.SIGNOUT_SUCCSESS);

export const signOutFailed = (error: Error) =>
  createAction(USER_ACTION_TYPE.SIGNOUT_FAILED, error);
