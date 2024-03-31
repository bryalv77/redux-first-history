import React from "react";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Route, Routes } from "react-router-dom";
import { configStore, getHistory } from "./store";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import NewDashboard from "./views/newDashboard";

export function App() {
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
