import React from "react";
import Text from "../text/Text";
import "./style.css";

function Link(props) {
  const { onClick, location, linkName, status } = props;

  return (
    <div>
      <a href={location} onClick={onClick} className="link">
        <Text content={linkName} type={status}></Text>{" "}
      </a>
    </div>
  );
}

export default Link;
