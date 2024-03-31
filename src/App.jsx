import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { push } from "redux-first-history";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
// import logger from 'redux-logger'

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

let store;

function configStore(preloadedState) {
  store = configureStore({
    reducer: combineReducers({ router: routerReducer }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware),
    preloadedState,
    devTools: process.env.REACT_APP_ENVIRONMENT !== "production",
  });
  return store;
}

const getHistory = () => createReduxHistory(store);

const LocationLog = (props) => {
  const router = useSelector((state) => state.router);
  const { location } = router;
  return (
    <h4>
      {props.title}
      {" -> "}
      {JSON.stringify(props.location || location)}
    </h4>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="app">
        <LocationLog />
        <div className="buttons">
          <button onClick={() => dispatch(push("/"))}>
            dispatch(push("/")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard"))}>
            dispatch(push("/dashboard")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard/new"))}>
            dispatch(push("/dashboard/new")) from everywhere
          </button>
        </div>
        <div className="links">
          <Link to="/">ReactRouter Link to Home</Link>
          <Link to="/dashboard">ReactRouter Link to Dashboard</Link>
          <Link to="/dashboard/new">ReactRouter Link to New Dashboard</Link>
        </div>
        <p>DashBoard Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <h1>Home</h1>
      <div className="app">
        <LocationLog />
        <div className="buttons">
          <button onClick={() => dispatch(push("/"))}>
            dispatch(push("/")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard"))}>
            dispatch(push("/dashboard")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard/new"))}>
            dispatch(push("/dashboard/new")) from everywhere
          </button>
        </div>
        <div className="links">
          <Link to="/">ReactRouter Link to Home</Link>
          <Link to="/dashboard">ReactRouter Link to Dashboard</Link>
          <Link to="/dashboard/new">ReactRouter Link to New Dashboard</Link>
        </div>
        <p>HomePage Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  );
};

const NewDashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <h1>New Dashboard</h1>
      <div className="app">
        <LocationLog />
        <div className="buttons">
          <button onClick={() => dispatch(push("/"))}>
            dispatch(push("/")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard"))}>
            dispatch(push("/dashboard")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard/new"))}>
            dispatch(push("/dashboard/new")) from everywhere
          </button>
        </div>
        <div className="links">
          <Link to="/">ReactRouter Link to Home</Link>
          <Link to="/dashboard">ReactRouter Link to Dashboard</Link>
          <Link to="/dashboard/new">ReactRouter Link to New Dashboard</Link>
        </div>
        <p>New DashBoard Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={configStore()}>
      <Router history={getHistory()}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/new" element={<NewDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
