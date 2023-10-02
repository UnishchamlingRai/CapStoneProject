// import { SET_CURRENT_CATEGORIESMAP } from "./categories.actionType"
// import { getCategoriesAndDocument } from "../../utils/firebase/firebase";
// import { SET_CURRENT_CATEGORIES } from "./categories.actionType";
import { CATEGORRIES_ACTION_TYPE } from "./categories.actionType";
// import { fetchCategoriesAsync } from "./categories.saga";

export const fetchCategoriesStart = () => {
  console.log("Loading called");
  return {
    type: CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START
};
}

export const fetchCategoriesSuccess = (categories) => {
  console.log("Seccess Called ...")
  return {
    type: CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFail = (error) => {
  return {
    type: CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,
    error: error,
  };
};


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