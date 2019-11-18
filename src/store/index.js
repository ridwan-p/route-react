import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [];
const enhancer = composeEnhancers(applyMiddleware (...middlewares));

export default createStore(rootReducer, enhancer);