const axios = require("axios");
const { getErrorsInData } = require("../utils/validations");
const { API_URL, TRANSLATIONS } = require("../utils/constants");

export const httpInstance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

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
      return dispatch(fetchErrorData(errors));
    }
    const { operation } = state;
    return httpInstance
      .post(`${API_URL}${operation}`, JSON.stringify(state))
      .then(response => {
        return dispatch(fetchData(response.data.result));
      })
      .catch(err => {
        if (err.response) {
          const { data } = err.response;
          if (data.errors) {
            const information = data.errors.reduce((acc, { name, message }) => {
              acc[name] = TRANSLATIONS[message];
              return acc;
            }, {});
            return dispatch(fetchErrorData(information));
          }
        }

        return dispatch(fetchErrorData({ server: `Error en el servicio` }));
      });
  };
};
