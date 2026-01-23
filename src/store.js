import { combineReducers, createStore, compose } from "redux";
import { userReducer, productsReducer } from "./reducers";
import { applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';


const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

