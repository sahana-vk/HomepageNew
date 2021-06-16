import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Image(props) {
  const { source, width, height, alt, imgBorder } = props;
  return (
    <div>
      <img
        src={source}
        width={width}
        height={height}
        alt={alt}
        className={`${imgBorder}`}
      ></img>
    </div>
  );
}

Image.propTypes = {
  source: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  imgBorder: PropTypes.string,
};

export default Image;
