import React from "react";
import { func, string, bool } from "prop-types";
import { StyledInput } from "./input.styled";
import { IdentityFunc } from "../../../utils";

const Input = ({
  onChange,
  classes,
  disabled,
  validate,
  value,
  placeholder
}) => {
  return (
    <StyledInput
      disabled={disabled}
      placeholder={placeholder}
      className={classes}
      value={value}
      onChange={event => onChange(validate(event.target.value))}
    />
  );
};

Input.propTypes = {
  classes: string,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  validate: func,
  disabled: bool
};

Input.defaultProps = {
  validate: IdentityFunc,
  classes: "",
  disabled: false
};

export default Input;
