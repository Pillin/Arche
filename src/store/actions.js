const axios = require("axios");
const { getErrorsInData } = require("../utils/validations");
const { API_URL } = require("../utils/constants");

export const ACTIONS = {
  CHANGE_FIRST_VALUE: "CHANGE_FIRST_VALUE",
  CHANGE_SECOND_VALUE: "CHANGE_SECOND_VALUE",
  CHANGE_OPERATION: "CHANGE_OPERATION",
  CALL_CALCULATE: "CALL_CALCULATE",
  ERROR_DATA: "ERROR_DATA",
  FETCH: "FETCH"
};

export const changeFirstValue = value => {
  return {
    type: ACTIONS.CHANGE_FIRST_VALUE,
    data: value
  };
};

export const changeSecondValue = value => {
  return {
    type: ACTIONS.CHANGE_SECOND_VALUE,
    data: value
  };
};

export const changeOperation = value => {
  return {
    type: ACTIONS.CHANGE_OPERATION,
    data: value
  };
};

export const fetchData = data => {
  return {
    type: ACTIONS.FETCH,
    data
  };
};

export const fetchErrorData = data => {
  return {
    type: ACTIONS.ERROR_DATA,
    data
  };
};

export const calculate = state => {
  return dispatch => {
    const errors = getErrorsInData(state);
    if (Object.entries(errors).length > 0) {
      dispatch(fetchErrorData(errors));
      return;
    }
    axios
      .get(API_URL)
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
