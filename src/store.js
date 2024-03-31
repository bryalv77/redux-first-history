import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

export const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(routerMiddleware))
);

export const history = createReduxHistory(store);
