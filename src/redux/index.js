import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import interviewsReducer from './reducers/interviews';
import reviewsReducer from './reducers/reviews';
import usersReducer from './reducers/users';

const reducer = combineReducers({
    interviewsReducer,
    reviewsReducer,
    usersReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 