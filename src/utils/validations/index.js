import {
  EMPTY_INPUT_VALUE_ERROR,
  EMPTY_SELECT_VALUE_ERROR
} from "../constants";

export const numbersAndDotsRegex = /[^0-9.]/;

export const validateNumber = value => value.replace(numbersAndDotsRegex, "");

export const getErrorsInData = ({ firstValue, secondValue, operation }) => {
  const errors = {};
  if (!firstValue) {
    errors.firstValue = EMPTY_INPUT_VALUE_ERROR;
  }
  if (!secondValue) {
    errors.secondValue = EMPTY_INPUT_VALUE_ERROR;
  }
  if (!operation) {
    errors.operation = EMPTY_SELECT_VALUE_ERROR;
  }
  return errors;
};
