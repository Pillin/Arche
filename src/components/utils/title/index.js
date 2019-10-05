import React from "react";
import { string } from "prop-types";
import { StyledTitle } from "./title.styled";

const Title = ({ label }) => {
  return <StyledTitle>{label}</StyledTitle>;
};

Title.propTypes = {
  label: string.isRequired
};
export default Title;
