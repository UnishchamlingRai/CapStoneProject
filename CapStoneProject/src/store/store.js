import {compose,createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import { rootReducer } from './rootReducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
const persistConfig={
    key:"root",
    storage,
    whitelist:['cart']
}

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer=persistReducer(persistConfig,rootReducer)
const middlwares=[process.env.NODE_ENV!=='production' && logger,thunk].filter(Boolean);
const composeEnhancers=composeEnhancer(applyMiddleware(...middlwares)) 
export const store=createStore(persistedReducer,undefined,composeEnhancers)

export const persistor=persistStore(store)