import {createSelector} from 'reselect'
import { RootState } from '../store'
import { categoriesState } from './categories.Reducer';
import { CategoryMap } from './categories.actionType';
export const selectCategoryReducer=(state:RootState):categoriesState=>{
  console.log("hello select 1 fired",state)
  return state.categories;
}

// console.log("hello:",selectCategoryReducer)

export const selectCategories=createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>categoriesSlice.categoriesMap
  )

  // console.log("first From Reducer SelectCategories:",selectCategories)


  export const selectCategoriesMap=createSelector(
    [selectCategories],
    (categories)=>{
// console.log("Selector fired..")
      return categories.reduce((acc, category):CategoryMap => {
        // console.log("Category Selector Fired Reduce")
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {} as CategoryMap);
    }
  )

  export const selectIsLoading=createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
  )
  
//Needed to use ( Reselect Library )to optimize code
