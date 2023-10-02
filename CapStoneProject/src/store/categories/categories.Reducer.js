import { CATEGORRIES_ACTION_TYPE } from "./categories.actionType";

const initial_State = {
  categoriesMap: [],
  isLoading:true,
  error:null
};

export const categoriesReducer = (state = initial_State, action = {}) => {
  // console.log("CategoriesMap Action:",action)
  const { type, payload } = action;
  switch (type) {
    // case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START:
    //   return { ...state, isLoading:true };

      case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state,categoriesMap:payload,isLoading:false };

      case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return { ...state, error:payload, isLoading:false };

    default:
      return state;
  }
};
