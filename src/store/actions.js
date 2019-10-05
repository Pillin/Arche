export const ACTIONS = {
  CHANGE_FIRST_VALUE: "CHANGE_FIRST_VALUE",
  CHANGE_SECOND_VALUE: "CHANGE_SECOND_VALUE",
  CHANGE_OPERATION: "CHANGE_OPERATION",
  CALL_CALCULATE: "CALL_CALCULATE"
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

export const calculate = () => {
  const result = 2;
  return {
    type: ACTIONS.CALL_CALCULATE,
    data: result
  };
};
