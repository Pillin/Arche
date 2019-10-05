import React from "react";
import { string, shape } from "prop-types";
import { StyledErrorMessage } from "./errorMessage.styled";

const ErrorMessage = ({ errors, name }) => {
  return errors[name] ? (
    <StyledErrorMessage>{errors[name]}</StyledErrorMessage>
  ) : (
    ""
  );
};

ErrorMessage.propTypes = {
  name: string.isRequired,
  errors: shape({
    firstValue: string,
    secondValue: string,
    operation: string
  }).isRequired
};

export default ErrorMessage;
