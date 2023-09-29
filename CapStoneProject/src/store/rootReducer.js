import {combineReducers} from 'redux'
import { userReducer } from './user/user.Reducer'
import { categoriesReducer } from './categories/categories.Reducer'
import { cartReducer } from './cart/cart.Reducer'
export const rootReducer=combineReducers({
    user:userReducer,
    categories:categoriesReducer,
    cart:cartReducer
    // cart:cartReducer
})