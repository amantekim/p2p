import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

import rootReducer from "./store";
import client from "./axios-instance";


const middlewares = [];

middlewares.push(axiosMiddleware(client));
middlewares.push(logger);

if (process.env.NODE_ENV === `development`) {
	middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
