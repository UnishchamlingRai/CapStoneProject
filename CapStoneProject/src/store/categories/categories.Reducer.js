import { SET_CURRENT_CATEGORIES } from "./categories.actionType";

const initial_State = {
  categoriesMap: [],
  isLoading:"hello this is unish",
  error:null
};

export const categoriesReducer = (state = initial_State, action = {}) => {
  // console.log("CategoriesMap Action:",action)
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_START:
      return { ...state, isLoading:true };

      case SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_SUCCESS:
      return { ...state,categoriesMap:payload,isLoading:false };

      case SET_CURRENT_CATEGORIES.SET_CURRENT_CATEGORIES_FAIL:
      return { ...state, error:payload, isLoading:false };

    default:
      return state;
  }
};
