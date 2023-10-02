import {compose,createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import { rootReducer } from './rootReducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './rootSaga'
const persistConfig={
    key:"root",
    storage,
    whitelist:['cart']
}
const sagaMiddleware=createSagaMiddleware()
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer=persistReducer(persistConfig,rootReducer)
const middlwares=[process.env.NODE_ENV!=='production' && logger,sagaMiddleware,].filter(Boolean);
const composeEnhancers=composeEnhancer(applyMiddleware(...middlwares)) 
export const store=createStore(persistedReducer,undefined,composeEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor=persistStore(store)