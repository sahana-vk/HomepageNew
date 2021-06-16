import React from "react";
import "./style.css";

function CorouselIndicator(props) {
  const { classType, onClick } = props;
  return <div className={`${classType}`} onClick={onClick}></div>;
}

export default CorouselIndicator;
