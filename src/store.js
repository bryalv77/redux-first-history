import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
// import logger from 'redux-logger'
import createRootReducer from "./reducers";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

let store;

export function configStore(preloadedState) {
  store = configureStore({
    reducer: createRootReducer(routerReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware),
    preloadedState,
    devTools: process.env.REACT_APP_ENVIRONMENT !== "production",
  });
  return store;
}

export const getHistory = () => createReduxHistory(store);
