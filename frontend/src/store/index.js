import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

let enhancer;

if (process.env.NODE_ENV === "production") {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require("redux-logger").default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const rootReducer = combineReducers({});

const configureStore = (preloadState) =>
	createStore(rootReducer, preloadState, enhancer);

export default configureStore;
