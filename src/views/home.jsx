import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LocationLog } from "../components/locationLogs";
import { push } from "redux-first-history";
import { useDispatch } from "react-redux";

export const Home = () => {
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

export default Home;
