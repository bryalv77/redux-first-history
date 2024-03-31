import React from "react";
import { connect } from "react-redux";
import { push } from "redux-first-history";

const Buttons = ({ pushUrl }) => (
  <div>
    <button onClick={() => pushUrl("/")}>
      dispatch(push("/")) from everywhere
    </button>
    <button onClick={() => pushUrl("/dashboard")}>
      dispatch(push("/dashboard")) from everywhere
    </button>
  </div>
);
const StoreButtons = connect(
  () => ({}),
  (dispatch) => ({
    pushUrl: (url) => dispatch(push(url)),
  })
)(Buttons);

export default StoreButtons;
