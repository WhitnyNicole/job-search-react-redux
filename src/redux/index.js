import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import interviews from './reducers/interviews';
import reviews from './reducers/reviews';
import users from './reducers/users';

const reducer = combineReducers({
    interviews,
    reviews,
    users
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 