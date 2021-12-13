import React from "react";
import "./index.css";

import PropTypes from "prop-types";

/**
 * Adds a React component to show a back header with back button action.
 *
 * @param props - title (title to be displayed), navigateBack (function for back button click), backActionTitle (title for the back button action)
 */
const BackHeader = (props) => {
  return (
    <div className="subscriber-details-top-wrapper">
      <button
        type="button"
        id="back"
        className="goback"
        aria-label="back-button"
        onClick={props.navigateBack}
      >
        <span className="hidden">{props.backActionTitle}</span>
        {props.backActionTitle}
      </button>
      <h1
        role="heading"
        aria-label="main-heading"
        aria-level="1"
        className="subscriber-heading"
      >
        {props.title}
      </h1>
    </div>
  );
};

BackHeader.protoTypes = {
  navigateBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  backActionTitle: PropTypes.string.isRequired,
};

export default BackHeader;
