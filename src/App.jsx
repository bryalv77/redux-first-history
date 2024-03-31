import React from "react";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Route, Routes } from "react-router-dom";
import { store, history } from "./store";
import Home6 from "./views/home";
import Dashboard6 from "./views/dashboard";

export function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard6 />} />
          <Route path="/" element={<Home6 />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
