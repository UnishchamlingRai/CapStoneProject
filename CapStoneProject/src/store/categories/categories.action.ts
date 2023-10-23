import { AnyAction } from "redux";
import { CATEGORRIES_ACTION_TYPE, Categoreis } from "./categories.actionType";
import { action, actionTypeWithPayload, createAction } from "../createAction";


export type FetchCategoriesStart=action<CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess=actionTypeWithPayload<CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,Categoreis[]>
export type FetchCategoriesFail=actionTypeWithPayload<CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,Error>

export type CategoreisAction=FetchCategoriesStart | FetchCategoriesSuccess |FetchCategoriesFail;

export const fetchCategoriesStart = ():FetchCategoriesStart => createAction(CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categories:Categoreis[]):FetchCategoriesSuccess => {
  console.log("Categoreis from Ation:",categories)
  return createAction(CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,categories)
}

export const fetchCategoriesFail = (error:Error):FetchCategoriesFail => createAction(CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,error)

