import React from "react";
import { string, func, arrayOf, shape } from "prop-types";
import { StyledSelect } from "./select.styled";

const Select = ({ options, label, onSelect, selected }) => {
  return (
    <StyledSelect name={label} onChange={onSelect}>
      {options.map(({ text, value }, key) => (
        <option key={`option-${key.toString()}`} selected={selected === value}>
          {text}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  label: string.isRequired,
  onSelect: func.isRequired,
  selected: string.isRequired,
  options: arrayOf(
    shape({
      text: string.isRequired,
      value: string.isRequired
    })
  ).isRequired
};
export default Select;
