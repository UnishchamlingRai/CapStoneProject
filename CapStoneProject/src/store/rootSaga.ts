// import {call,all} from 'redux-saga/effects '
import { all,call } from "typed-redux-saga";
import { categoriesSaga } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";
export function* rootSaga(){
    console.log("Calling From root Saga")
yield* all([call(categoriesSaga),call(userSagas)])
}