import React from "react";
import { string, func, arrayOf, shape } from "prop-types";
import { StyledSelect } from "./select.styled";

const Select = ({
  options,
  label,
  onSelect,
  selected,
  placeholder,
  classes
}) => {
  return (
    <StyledSelect
      name={label}
      className={classes}
      onChange={event => onSelect(event.currentTarget.value)}
    >
      <option key="option-empty" selected={selected === ""} disabled>
        {placeholder}
      </option>
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
  placeholder: string.isRequired,
  onSelect: func.isRequired,
  selected: string.isRequired,
  options: arrayOf(
    shape({
      text: string.isRequired,
      value: string.isRequired
    })
  ).isRequired,
  classes: string
};

Select.defaultProps = {
  classes: ""
};
export default Select;
