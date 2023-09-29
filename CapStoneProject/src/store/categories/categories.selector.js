import {createSelector} from 'reselect'

export const selectCategoryReducer=(state)=>{
  // console.log("hello select 1 fired",state)
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
      return categories.reduce((acc, category) => {
        // console.log("Category Selector Fired Reduce")
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
    }
  )

  export const selectIsLoading=createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
  )
  
//Needed to use ( Reselect Library )to optimize code
