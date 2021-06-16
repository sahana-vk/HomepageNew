import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Text from "../text/Text";

function Button(props) {
  const { type, bgColor, btnName } = props;

  return (
    <div>
      <button type={type} className={`btn ${bgColor}`}>
        <Text content={btnName} type="text-btn"></Text>
      </button>
    </div>
  );
}

Button.defaultProps = {
  bgColor: "primary",
  type: "button",
};

Button.propTypes = {
  btnName: PropTypes.string,
  bgColor: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
