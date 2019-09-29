import { createStore, applyMiddleware, compose } from 'redux'
import reviewsReducer from './reducers/reviews'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reviewsReducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 