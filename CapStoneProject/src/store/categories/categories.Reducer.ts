import { CategoreisAction } from "./categories.action";
import { CATEGORRIES_ACTION_TYPE, Categoreis,  } from "./categories.actionType";

export type categoriesState={
  readonly categoriesMap: Categoreis[];
 readonly  isLoading:boolean;
  readonly error:Error | null;
}

const initial_State:categoriesState = {
  categoriesMap: [],
  isLoading:true,
  error:null
};

export const categoriesReducer = (state = initial_State, action = {} as CategoreisAction) => {
  // console.log("CategoriesMap Action:",action)
  
  switch (action.type) {
    // case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_START:
    //   return { ...state, isLoading:true };

      case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state,categoriesMap:action.payload,isLoading:false };

      case CATEGORRIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return { ...state, error:action.payload, isLoading:false };

    default:
      return state;
  }
};
