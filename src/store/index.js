import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

import sagas from "./saga";
import rootReducer from "./store";
import client from "./axios-instance";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(axiosMiddleware(client));
middlewares.push(sagaMiddleware);
middlewares.push(logger);

if (process.env.NODE_ENV === `development`) {
	middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(sagas);

export default store;
