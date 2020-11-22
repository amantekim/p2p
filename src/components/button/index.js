import React from "react";
import cx from "classnames";
import "./index.scss";

const Button = ({ buttonName, onClick, customStyle, disabled }) => {
  return (
    <button
      type="button"
      className={cx("button", disabled && 'disabled')}
      onClick={onClick}
      style={customStyle}
      disabled={disabled}
    >
      <span className={cx(disabled && 'disabled')}> {buttonName} </span>
    </button>
  );
};

export default Button;
