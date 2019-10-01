import { createStore, applyMiddleware, compose } from 'redux'
import interviewsReducer from './reducers/interviews'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(interviewsReducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 