import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import StoreButtons from "../components/buttons";
import { StoreLocationLog, LocationLog } from "../components/locationLogs";

const Dashboard = ({ location }) => (
  <div>
    <h1>Dashboard</h1>
    <div className="app">
      <StoreLocationLog />
      <StoreButtons />
      <Link to="/">ReactRouter Link to Home</Link>
      <Link to="/dashboard">ReactRouter Link to Dashboard</Link>
      <p>DashBoard Content !!</p>
      {location && (
        <LocationLog location={location} title="route.props.location" />
      )}
    </div>
  </div>
);

const Dashboard6 = () => {
  const location = useLocation();
  return <Dashboard location={location} />;
};

export default Dashboard6;
