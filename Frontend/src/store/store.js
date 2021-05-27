import { createStore, applyMiddleware,combineReducers, compose } from 'redux'

import ReduxThunk from 'redux-thunk'
import { artReducer } from './art/art.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  artModule : artReducer,

})

export const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)))