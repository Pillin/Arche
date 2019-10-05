import React from "react";
import { string, func } from "prop-types";
import { StyledButton } from "./button.styled";

const Button = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

Button.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired
};
export default Button;
