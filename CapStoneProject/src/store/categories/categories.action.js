// import { SET_CURRENT_CATEGORIESMAP } from "./categories.actionType"
import { getCategoriesAndDocument } from "../../utils/firebase/firebase"
import { SET_CURRENT_CATEGORIES } from "./categories.actionType"

export const fetchCategoriesStart=(categories)=>{
    console.log("Loading called")
    return {
        type:SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_START,
    }
}

export const fetchCategoriesSuccess=(categories)=>{
    return {
        type:SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_SUCCESS,
        payload:categories
    }
}

export const fetchCategoriesFail=(error)=>{
    return {
        type:SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_FAIL,
        error:error
    }
}

export const fetchCategoriesAsync=()=>{
    return async (dispatch)=>{
        const categories=await getCategoriesAndDocument()
        dispatch(fetchCategoriesStart())

        try {
            dispatch(fetchCategoriesSuccess(categories))
        } catch (error) {
            dispatch(fetchCategoriesFail(error))
        }
    }
}