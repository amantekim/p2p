import React from "react";
import "./index.scss"

const Button = ({ buttonName, onClick, customStyle }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      style={customStyle}
    >
      <span> {buttonName} </span>
    </button>
  );
};

export default Button;
