import React from "react";
import { useSelector } from "react-redux";

export const LocationLog = (props) => {
  const router = useSelector((state) => state.router);
  const { location } = router
  return (
    <h4>
      {props.title}
      {" -> "}
      {JSON.stringify(props.location || location)}
    </h4>
  );
}

export default LocationLog;
