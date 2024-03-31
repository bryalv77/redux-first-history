import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LocationLog } from "../components/locationLogs";
import { useDispatch } from "react-redux";
import { push } from "redux-first-history";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="app">
        <LocationLog />
        <div>
          <button onClick={() => dispatch(push("/"))}>
            dispatch(push("/")) from everywhere
          </button>
          <button onClick={() => dispatch(push("/dashboard"))}>
            dispatch(push("/dashboard")) from everywhere
          </button>
        </div>
        <Link to="/">ReactRouter Link to Home</Link>
        <Link to="/dashboard">ReactRouter Link to Dashboard</Link>
        <p>DashBoard Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
