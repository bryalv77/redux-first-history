import React from "react";
import { connect } from "react-redux";

export const LocationLog = ({ location, title }) => (
  <h4>
    {title}
    {" -> "}
    {JSON.stringify(location)}
  </h4>
);

export const StoreLocationLog = connect((state) => ({
  location: state.router.location,
}))(LocationLog);

export default StoreLocationLog;
