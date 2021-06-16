import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Text(props) {
  const { type, content } = props;

  return <div className={`text ${type}`}>{content}</div>;
}

Text.defaultProps = {
  type: "text-btn",
};

Text.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

export default Text;
