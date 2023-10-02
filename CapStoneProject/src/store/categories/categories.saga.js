import {call,all,takeLatest, put} from 'redux-saga/effects'
import { getCategoriesAndDocument } from "../../utils/firebase/firebase"
import { CATEGORRIES_ACTION_TYPE } from "./categories.actionType"
import { fetchCategoriesSuccess,fetchCategoriesFail } from "./categories.action"


// export const fetchCategoriesAsync=()=>{
//     return async (dispatch)=>{
//         const categories=await getCategoriesAndDocument()
//         dispatch(fetchCategoriesStart())

//         try {
//             dispatch(fetchCategoriesSuccess(categories))
//         } catch (error) {
//             dispatch(fetchCategoriesFail(error))
//         }
//     }
// }

export function* fetchCategoriesAsync(){
    console.log("Async Called...")
    try {
        const categoriesArray=yield call(getCategoriesAndDocument,'categories')
        console.log("CategoreisArray:=",categoriesArray)
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFail(error))
    }
}



export function*onFetchCategories(){
    console.log("OnFetchCategories:")
    yield takeLatest(CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga(){
    console.log("calling CategoriesSata From Categoreis Safa")
    yield all([call(onFetchCategories)])
}