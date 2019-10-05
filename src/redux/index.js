import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import interviewsReducer from './reducers/interviews';
import reviewsReducer from './reducers/reviews';

// const reducer = combineReducers({
//     interviews: interviewsReducer,
//     reviews: reviewsReducer 
// })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(interviewsReducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 